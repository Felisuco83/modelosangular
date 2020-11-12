export class Producto {
    public nombre: string;
    public imagen: string;
    public precio: number;

    // constructor(){
    //     console.log("construyendo objeto new");
    // }
    constructor(nom,img,precio){
        this.nombre = nom;
        this.imagen = img;
        this.precio = precio;
    }
}