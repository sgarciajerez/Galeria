export class Imagen {
    url:string='';
    volverGrande:boolean=false;

    constructor(url:string){
        this.url=url;
        this.volverGrande=false;
    }

    cambiarTamano():void{
        if(!this.volverGrande){
            this.volverGrande=true;
        }else{
            this.volverGrande=false;
        }
        console.log(this.volverGrande);
        
    }

    getVolverGrande():boolean{
        return this.volverGrande;
    }
}