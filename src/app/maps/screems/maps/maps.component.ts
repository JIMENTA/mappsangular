import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  constructor( private placesServices: PlacesService){}

  get userLocationReady(){
    return this.placesServices.isUserLocationReady
  }

}
