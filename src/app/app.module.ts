import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing-module'

import { AppComponent } from './app.component';
import { GaleriaPrincipalComponent } from './pages/galeria-principal/galeria-principal.component';
import { ImagenCompletaComponent } from './components/imagen-completa/imagen-completa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaPrincipalComponent,
    ImagenCompletaComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
