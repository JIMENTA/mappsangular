import { Injectable } from '@angular/core';
import { PlaceApiClient } from '../apis/placesApiClient';
import { Feature, PlacesResponse } from '../interfaces/places';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public userLocation? :[number, number];
  public loadingPlaces : boolean = false;
  public places : Feature[] = [];
  
  get isUserLocationReady(): boolean{
    return !!this.userLocation //doble negacion
  }
  constructor( private placesApi : PlaceApiClient, private mapService : MapService) { 
    this.getUserLocation()
  }

  public async getUserLocation():Promise <[number, number]>{
    return new Promise ((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
      ({ coords}) => {
        this.userLocation = [coords.longitude, coords.latitude]
        resolve (this.userLocation)},
        (err) =>{
            alert('No se pudo obtener la geolocalizacion')
            console.log(err);
            reject()
          }
        
      )
    })
  }


  getPlacesByQuery(query : string){

    if(query.length === 0){
      this.loadingPlaces = false;
      this.places =[];
      return
    }

    if(!this.userLocation) throw Error('No se puede acceder a la ubicacion')

    this.loadingPlaces = true;

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params:{
        proximity : this.userLocation.join(',')
      }
    })
    .subscribe((resp) =>{
      this.loadingPlaces = false;
      this.places = resp.features

      this.mapService.createMarkersFromPlaces(this.places, this.userLocation!)
    })
  }


  deletePlaces(){
    this.places =[]
  }

}
