import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken =
  'pk.eyJ1IjoiYmp2YWxtYXNlZGEiLCJhIjoiY2xrM3EwZ29zMHcwMjNmcnk2MXBpbW5qciJ9.xLMDIzhTIso_5g_hJlwwRQ';

if (!navigator.geolocation) {
  alert("Browser doesn't support geolocation");
  throw new Error("Browser doesn't support geolocation");
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
