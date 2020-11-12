import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aleatorios',
  templateUrl: './aleatorios.component.html',
  styleUrls: ['./aleatorios.component.css']
})
export class AleatoriosComponent implements OnInit {
  public numeros : Array<number>;
  constructor() {
    this.numeros = [];
    for (let i=0;i<10;i++) {
      this.numeros.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }
   }

  ngOnInit(): void {
  }

}
