import { Component, inject } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
})
export class BtnMyLocationComponent {
  private mapService = inject(MapService);
  private placesService = inject(PlacesService);

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady)
      throw new Error("User location doesn't exist");
    if (!this.mapService.isMapReady) throw new Error("Map doesn't exist");

    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
