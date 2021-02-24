import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personaje.interface";


@Injectable()
export class DbzService{

 private  _personajes: Personaje[] = [{
      nombre: 'Goku',
      poder: 8000
    },
    {
      nombre: 'Vegueta',
      poder: 7000
    }
  ];

  get personajes(): Personaje[]{
    //Operador spread:
    return [...this._personajes];
  }
  constructor(){
  }

  agregarPersonaje(personaje: Personaje): void{
    this._personajes.push(personaje);
  }
}
