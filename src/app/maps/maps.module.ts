import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './screems/maps/maps.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { BtnLocationComponent } from './components/btn-location/btn-location.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';



@NgModule({
  declarations: [
    MapsComponent,
    LoadingComponent,
    MapViewComponent,
    BtnLocationComponent,
    LogoComponent,
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    MapsComponent
  ]
})
export class MapsModule { }
