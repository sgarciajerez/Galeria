import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Imagen } from '../../models/imagen.model';
import {ActivatedRoute, Router} from '@angular/router'
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-imagen-completa',
  templateUrl: './imagen-completa.component.html',
  styleUrls: ['./imagen-completa.component.css']
})
export class ImagenCompletaComponent implements OnInit{
  
  id:any;
  images:Imagen[]=[]
  imagen:any;

  constructor(
    private aRoute:ActivatedRoute,
    private route:Router,
    private imagesService:ImagenService
    ){
    this.id=this.aRoute.snapshot.paramMap.get('id');
    this.id=parseInt(this.id);
  }

  ngOnInit(): void {  
    this.getImagen();
  }

  getImagen(){
    this.imagesService.getImages().subscribe(data=>{
      this.images=data.images;      
      this.imagen=this.images.find(el => el.id==this.id);      
    }, error=>{
      console.log(error);
    })
  }

  next(){
    this.id++; 
    console.log(this.id);
    if(this.images.length==this.id){
      this.id=0;
    }
    this.imagen=this.images[this.id];    
  }

  previous(){
    console.log(this.id);
    
    if(this.id==0){
      this.id=this.images.length;
    }
    this.id--;        
    this.imagen=this.images[this.id];
  }


}
