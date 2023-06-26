import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-principal',
  templateUrl: './galeria-principal.component.html',
  styleUrls: ['./galeria-principal.component.css']
})
export class GaleriaPrincipalComponent {

  imagenes = [
    { id: 1,
      url: '../../assets/imagenes/1.jpg',
      volverGrande:false,
    },
    { id: 2,
      url: '../../assets/imagenes/2.jpg',
      volverGrande:false,
    },
    { id: 3,
      url: '../../assets/imagenes/3.jpg',
      volverGrande:false,
    },
    { id: 4,
      url: '../../assets/imagenes/4.jpg',
      volverGrande:false,
    },
    { id: 5,
      url: '../../assets/imagenes/5.jpg',
      volverGrande:false,
    },
  ];

  changeSize(id:number):void{
    if(!this.imagenes[id-1].volverGrande){
      this.imagenes[id-1].volverGrande=true;
    }else{
      this.imagenes[id-1].volverGrande=false;
    }    
  }


}
