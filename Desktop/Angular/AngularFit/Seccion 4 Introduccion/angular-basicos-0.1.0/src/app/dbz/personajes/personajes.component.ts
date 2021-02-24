import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  //@Input() personajes: Personaje[] = [];
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

}
