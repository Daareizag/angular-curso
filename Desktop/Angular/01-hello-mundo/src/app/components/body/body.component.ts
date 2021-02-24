import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{

  bandera:boolean = true;
  frase:any = {
    mensaje: 'Un gran poder requiere una granresponsabilidad.',
    autor: 'Ben Parker'
  }

  personajes: string[] = ['spiderman', 'superman', 'batman', 'Hulk'];
}
