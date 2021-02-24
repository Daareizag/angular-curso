import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'aurope', 'oceania'];
  regionSeleccionada: string = '';
  paises: Country[]=[];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  activarCSS( region: string ): string{
    return ( region === this.regionSeleccionada ) ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion( region: string){
    this.regionSeleccionada =  region;

    this.paisService.buscarPaisXRegion(region).subscribe(
      paises => { this.paises = paises }
    );
  }

}
