import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.servce';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService) {
    this.activatedRoute.params.subscribe( param => {
      this.heroe = this.heroeService.getHeroe(param['id']);
    });
   }

  ngOnInit(): void {
  }

}
