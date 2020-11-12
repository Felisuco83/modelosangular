import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numero: number;
  public arrayNumeros: Array<number>;
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( params: Params ) => {
      if (params.numero != null){
        this.numero = parseInt(params.numero);
        var aux = this.numero;
        this.arrayNumeros = [];
        while(aux != 1){
          if (aux % 2 == 0){
            aux = aux /2;
            this.arrayNumeros.push(aux);
          } else {
            aux = aux*3+1;
            this.arrayNumeros.push(aux);
          }
        }
      } else {
        console.log("No hay parámetros");
      }
    });
  }

}
