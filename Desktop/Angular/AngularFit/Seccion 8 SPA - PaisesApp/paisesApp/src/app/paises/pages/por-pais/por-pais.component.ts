import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Language, Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisesService: PaisService ) { }

  ngOnInit(): void {
  }

  buscar( termino:string ){
    this.hayError = false;
    this.termino = termino;
    this.paisesService.buscarPais( this.termino )
      .subscribe(
          paises => {
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
