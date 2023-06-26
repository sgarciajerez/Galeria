import { Component } from '@angular/core';
import { ImagenCompletaComponent } from '../imagen-completa/imagen-completa.component';
import { Imagen } from '../imagen.model';

@Component({
  selector: 'app-galeria-principal',
  templateUrl: './galeria-principal.component.html',
  styleUrls: ['./galeria-principal.component.css']
})

export class GaleriaPrincipalComponent {


  imagenes:Imagen[] = [
    new Imagen('../../assets/imagenes/1.jpg'),
    new Imagen('../../assets/imagenes/2.jpg'),
    new Imagen('../../assets/imagenes/3.jpg'),
    new Imagen('../../assets/imagenes/4.jpg'),
    new Imagen('../../assets/imagenes/5.jpg'),
  ];

  changeSize(id:number):void{
    if(!this.imagenes[id-1].volverGrande){
      this.imagenes[id-1].volverGrande=true;
    }else{
      this.imagenes[id-1].volverGrande=false;
    }    
  }
}
