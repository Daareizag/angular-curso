import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  alerta:string = 'danger';
  lista: string[] = ['danger','success','warning','secundary','primary'];

  constructor() { }

  ngOnInit(): void {
  }

}
