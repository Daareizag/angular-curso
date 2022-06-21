import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Thor", "IronMan", "Hulk"];
  borrarHeroe: string = "";
  controlBorrar: boolean = false;


  borrarNombre() {
    this.controlBorrar = true;
    this.borrarHeroe = this.heroes.shift() || "";
  }



}

