import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapScreenComponent } from './screen/map-screen/map-screen.component';
import { MapsViewComponent } from './components/maps-view/maps-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMyLocationComponent } from './components/btn-my-location/btn-my-location.component';
import { AngularLogoComponent } from './components/angular-logo/angular-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [MapScreenComponent, MapsViewComponent, LoadingComponent, BtnMyLocationComponent, AngularLogoComponent, SearchBarComponent, SearchResultsComponent],
  imports: [CommonModule],
  exports: [MapScreenComponent],
})
export class MapsModule {}
