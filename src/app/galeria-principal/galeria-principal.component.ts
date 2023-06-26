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
    new Imagen(1, '../../assets/imagenes/1.jpg'),
    new Imagen(2, '../../assets/imagenes/2.jpg'),
    new Imagen(3, '../../assets/imagenes/3.jpg'),
    new Imagen(4, '../../assets/imagenes/4.jpg'),
    new Imagen(5, '../../assets/imagenes/5.jpg'),
  ];

  changeSize(id:number):void{
    if(!this.imagenes[id-1].volverGrande){
      this.imagenes[id-1].volverGrande=true;
    }else{
      this.imagenes[id-1].volverGrande=false;
    }    
  }


}
