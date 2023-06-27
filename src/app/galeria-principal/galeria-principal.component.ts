import { Component } from '@angular/core';
import { ImagenCompletaComponent } from '../imagen-completa/imagen-completa.component';
import { Imagen } from '../imagen.model';

@Component({
  selector: 'app-galeria-principal',
  templateUrl: './galeria-principal.component.html',
  styleUrls: ['./galeria-principal.component.css']
})

export class GaleriaPrincipalComponent {

  mostrar:boolean=true;
  
  imagenes:Imagen[] = [
    new Imagen('../../assets/imagenes/2.jpg'),
    new Imagen('../../assets/imagenes/3.jpg'),
    new Imagen('../../assets/imagenes/4.jpg'),
    new Imagen('../../assets/imagenes/5.jpg'),
    new Imagen('../../assets/imagenes/6.jpg'),
    new Imagen('../../assets/imagenes/7.jpg'),
    new Imagen('../../assets/imagenes/8.jpg'),
    new Imagen('../../assets/imagenes/9.jpg'),
    new Imagen('../../assets/imagenes/10.jpg'),
    new Imagen('../../assets/imagenes/11.jpg'),
    new Imagen('../../assets/imagenes/12.jpg'),
  ];

  cambiarMostrar():void{
    if(this.mostrar){
      this.mostrar=false;
    }else{
      this.mostrar=true;
    }    
  }
}
