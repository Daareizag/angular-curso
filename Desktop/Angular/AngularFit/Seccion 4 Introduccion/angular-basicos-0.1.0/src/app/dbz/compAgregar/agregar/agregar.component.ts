import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //@Input() personajes: Personaje[] = [];

  //@Output() emitirPresonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  nuevo : Personaje = {
    nombre : '',
    poder : 0
  }

  agregar( ){
    if(this.nuevo.nombre.trim().length === 0){ return };
    //this.emitirPresonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder : 0
    }
  }
}
