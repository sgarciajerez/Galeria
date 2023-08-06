import { Component, OnInit } from '@angular/core';
import { ImagenCompletaComponent } from '../../components/imagen-completa/imagen-completa.component';
import { Imagen } from '../../models/imagen.model';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-galeria-principal',
  templateUrl: './galeria-principal.component.html',
  styleUrls: ['./galeria-principal.component.css']
})

export class GaleriaPrincipalComponent implements OnInit {

  mostrar:boolean=true;
  
  images:Imagen[] = [];
  clicked:boolean=false;

  constructor(private imagesService:ImagenService){}

  ngOnInit(): void {
    this.getImages();  
  }

  getImages(){
    this.imagesService.getImages().subscribe(data=>{
      this.images=data.images; 
    }, error=>{
      console.log(error);
    })
  }

  showImage(){
    this.clicked=true;
  }
}
