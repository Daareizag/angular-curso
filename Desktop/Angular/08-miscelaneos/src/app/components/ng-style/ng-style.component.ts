import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p  [style.fontSize.px]="size">
      Esta es una etiqueta
    </p>
     <button class="btn btn-outline-primary" (click)="size = size + 5">
       <i class="fa fa-plus"></i>
     </button>
     <button class="btn btn-outline-primary" (click)="size = size - 5">
       <i class="fa fa-minus"></i>
     </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  size = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
