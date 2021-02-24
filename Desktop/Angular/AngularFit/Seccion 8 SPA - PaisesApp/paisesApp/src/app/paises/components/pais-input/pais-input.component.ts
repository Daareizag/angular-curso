import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  debounce: Subject<string> = new Subject();

  termino: string = '';

  @Input() placeHolder: string = '';

  constructor() { }

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor )
    })
  }

  buscar(){
    this.onEnter.emit( this.termino );
    this.termino='';
  }

  teclaPresionada(){
    this.debounce.next( this.termino );
  }

}
