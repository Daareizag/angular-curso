import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.servce';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private router: Router,
                private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      const term = param['term'];
      // Se valida si la ruta tiene el parametro term
      console.log('llegue al oninit')
      if (!(term === undefined)){
        console.log('entre en validacion 1')
        // se puebla el arreglo con el heroe del search
        this.heroes = this._heroesService.buscarHeroes(param['term']);
      }
    });
    // valida si el arreglo de heroes contiene algun obj
    if (!(this.heroes.length > 0)){
      // Puebla el arreglo con la lista de heroes
      this.heroes = this._heroesService.getHeroes();
    }
    console.log(this.heroes);
  }

  mostrarHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
  }

}
