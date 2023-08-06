import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  JSON_URL='../../assets/images.json';

  constructor(private http:HttpClient) { }

  getImages(): Observable<any>{
    return this.http.get(this.JSON_URL);
  }

}
