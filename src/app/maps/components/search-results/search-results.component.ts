import { Component, inject } from '@angular/core';
import { Feature } from '../../interfaces/interface';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  private placesService = inject(PlacesService);
  private mapService = inject(MapService);
  public selectedId = '';

  public get isLoadingPlaces() {
    return this.placesService.isLoadingPlaces;
  }

  public get places() {
    return this.placesService.places;
  }

  public flyTo(place: Feature) {
    this.selectedId = place.id;
    const [lng, lat] = place.center;
    this.mapService.flyTo([lng, lat]);
  }

  public getDirections(place: Feature) {
    if (!this.placesService.userLocation)
      throw new Error("User location doesn't exist");

    this.placesService.deletePlaces();
    const start = this.placesService.userLocation;
    const end = place.center as [number, number];
    this.mapService.getRoutesBetweenTwoPoints(start, end);
  }
}
