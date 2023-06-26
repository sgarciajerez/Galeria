export class Imagen {
    id:number=0;
    url:string='';
    volverGrande:boolean=false;

    constructor(id:number, url:string){
        this.id=id;
        this.url=url;
        this.volverGrande=false;
    }
}