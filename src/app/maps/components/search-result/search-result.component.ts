import { Component } from '@angular/core';
import { Feature } from '../../interfaces/places';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  public selectedItem : string ='';

  constructor( private placesService : PlacesService, private mapService : MapService){}

  get loadingPlaces(): boolean{
    return this.placesService.loadingPlaces
  }

  get places(): Feature[]{
    return this.placesService.places
  }

  flyTo(place : Feature){
this.selectedItem = place.id

    const [ lng , lat] = place.center;
    this.mapService.flyTo([lng, lat])
  }

  getDirections( place : Feature){
if(!this.placesService.userLocation) throw Error ('No se encuentra la ubicacion del usuario')

    this.placesService.deletePlaces()

    const start = this.placesService.userLocation;
    const end = place.center as  [number, number];

    this.mapService.getRouteBetweenTwoPoints(start , end)

  }
}
