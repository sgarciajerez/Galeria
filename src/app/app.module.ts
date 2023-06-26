import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GaleriaPrincipalComponent } from './galeria-principal/galeria-principal.component';
import { ImagenCompletaComponent } from './imagen-completa/imagen-completa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaPrincipalComponent,
    ImagenCompletaComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
