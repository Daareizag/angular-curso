import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-msgerror',
  templateUrl: './msgerror.component.html',
  styles: [
  ]
})
export class MsgerrorComponent implements OnInit {
  @Input() mensaje: string;

  constructor() { }

  ngOnInit(): void {
  }

}
