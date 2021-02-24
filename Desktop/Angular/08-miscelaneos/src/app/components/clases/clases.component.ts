import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [`
    button,i{
      margin: 5px
    }
  `]
})
export class ClasesComponent implements OnInit {

  alerta = 'alert-danger';
  // utilizando obj
  propiedades = {
    danger: true
  };

  loading = false;
  constructor() { }

  ngOnInit(): void {
  }

  ejecutaProceso(): void{
   this.loading = true;
   setTimeout( () => { this.loading = false; }, 3000);
  }

}
