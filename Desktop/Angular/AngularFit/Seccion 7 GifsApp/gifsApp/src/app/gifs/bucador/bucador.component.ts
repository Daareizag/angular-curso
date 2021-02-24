import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-bucador',
  templateUrl: './bucador.component.html',
  styleUrls: ['./bucador.component.css']
})
export class BucadorComponent implements OnInit {

  //Se obtiene referencia de elemento html
  @ViewChild('txtbuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    //Se valida que no incluyan cadenas vacia
    if(valor.trim().length === 0){ return;}
    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
