import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisesService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino:string ){
    this.hayError = false;
    this.termino = termino;
    this.paisesService.buscarCapital( this.termino )
      .subscribe(
          paises => {
            console.log(paises);
            this.paises = paises;
          }, error => {
            this.paises = [];
            this.hayError = true;
          }
      );
  }

  sugerencias( termino: string ){
    this.hayError = false;
  }
}
