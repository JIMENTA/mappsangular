import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent  implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor( private placesService: PlacesService, private mapService : MapService){}

  ngAfterViewInit(): void {

    if ( !this.placesService.userLocation) throw Error (' No hay placesService.userLocation')
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation,
      zoom: 14, 
      });

      const popup = new Popup()
      .setHTML(
        `
        <h4>Aqui estoy</h4>
        <span>en este lugar del mundo</span>
        `
      );

      new Marker ({color: 'blue'})
      .setLngLat(this.placesService.userLocation)
      .setPopup(popup)
      .addTo(map)
      
      this.mapService.setMap(map)
  }


}
