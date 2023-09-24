import { Injectable, inject } from '@angular/core';
import { PlacesApiClient } from '../api/placeApiClient';
import { Feature, PlacesResponse } from '../interfaces/interface';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];
  private placesHttp = inject(PlacesApiClient);
  private mapService = inject(MapService);

  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor() {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        this.userLocation = [coords.longitude, coords.latitude];
        resolve(this.userLocation);
      });

      (err: any) => {
        alert('Unable to get geolocation');
        console.log(err);
        reject();
      };
    });
  }

  public getPlacesByQuery(query: string = '') {
    // todo query empty
    this.isLoadingPlaces = true;
    if (!this.userLocation) throw new Error("User location doesn't exist");

    this.placesHttp
      .get<PlacesResponse>(`/${query}.json?`, {
        params: {
          proximity: this.userLocation.join(','),
        },
      })
      .subscribe((res) => {
        this.isLoadingPlaces = false;
        this.places = res.features;

        this.mapService.createMarkerFromPlaces(this.places, this.userLocation!);
      });
  }

  deletePlaces() {
    this.places = [];
  }
}
