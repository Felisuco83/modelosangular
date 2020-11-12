import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/producto';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
  //DECLARAMOS UNA VARIABLE DEL TIPO MODELO PRODUCTO
  public producto: Producto;
  // public listaProductos : Array<Producto>;
  constructor() {
    //CUANDO UTILIZAMOS MODELOS, SE UTILIZA LA PALABRA NEW PARA CREAR OBJETOS, ENTRANDO EN EL CONSTRUCTOR 
    // DE ESA CLASE MODELO
    this.producto = new Producto("leche", "lalala", 3);
    // this.producto.nombre = "leche";
    // this.producto.precio = 3;
    // this.producto.imagen = "lalala";
   }

  ngOnInit(): void {
  }

}
