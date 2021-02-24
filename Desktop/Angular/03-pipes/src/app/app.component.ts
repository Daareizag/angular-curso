import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Elvis Areiza';
  arreglo: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 354258;

  persona = {
    nombre: 'Elvis',
    apellido: 'Areiza',
    edad: 38,
    caracteristica: {
      piel: 'blanca',
      ojos: 'negros'
    }
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 5000);
  });

  fecha: Date = new Date();

  idioma: string = 'fr';

  nombre2: string = 'elvis areiza';

  url:string = 'https://www.youtube.com/embed/Dr6iQxNu0wo';

  password: string = '12345';
  estado: boolean = false;
}
