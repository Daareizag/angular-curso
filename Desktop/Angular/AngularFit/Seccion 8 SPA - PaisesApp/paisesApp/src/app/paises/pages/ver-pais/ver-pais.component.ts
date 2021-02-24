import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

    constructor( private activatedRoute: ActivatedRoute,
                 private paisService: PaisService) { }


  ngOnInit(){
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => {
        console.log(id);
        return this.paisService.buscarPaisXCod( id )
      }),
      tap( resp => console.log(resp))
    ).subscribe( pais => this.pais = pais);
  }

}
