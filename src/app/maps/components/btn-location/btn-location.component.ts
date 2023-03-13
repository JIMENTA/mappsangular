import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-location',
  templateUrl: './btn-location.component.html',
  styleUrls: ['./btn-location.component.css']
})
export class BtnLocationComponent {

  constructor(private placesService: PlacesService, private mapService : MapService){}

  goToMyLocation(){

    if(!this.placesService.isUserLocationReady) throw Error ('Ubicacion no disponible');
    if(!this.mapService.isMapReady) throw Error ('Mapa no disponible');

    this.mapService.flyTo(this.placesService.userLocation!)

    }

}
