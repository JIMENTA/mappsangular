import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



import mapboxgl from 'mapbox-gl'; 
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamltZW50YSIsImEiOiJjbGY1dGd2YzYweTlsM3NvY3g1MmdvdmFvIn0.mTLH34-LdB3RQjEFGVeNgw';



if(!navigator.geolocation){
  alert('Navegador no soporta la geolocalizacion')
  throw new Error('Navegador no soporta la geolocalizacion')
}




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
