import { Component, Input } from '@angular/core';
import { Imagen } from '../imagen.model';

@Component({
  selector: 'app-imagen-completa',
  templateUrl: './imagen-completa.component.html',
  styleUrls: ['./imagen-completa.component.css']
})
export class ImagenCompletaComponent {
  @Input() imagen:Imagen;
}
