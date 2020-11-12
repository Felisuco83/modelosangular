import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AleatoriosComponent } from './components/aleatorios/aleatorios.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { routing, appRoutingProviders } from './app.routing';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';

@NgModule({
  declarations: [
    AppComponent,
    AleatoriosComponent,
    CollatzComponent,
    ListaproductosComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
