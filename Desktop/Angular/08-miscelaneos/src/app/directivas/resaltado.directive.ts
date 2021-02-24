import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") resaltado:string;

  constructor( private elem: ElementRef) {
    //Se cambia la propiedad del elemento
    //elem.nativeElement.style.backgroundColor = "yellow";

  }

  //Se escucha el evento y se acciona el cambio de la propiedad
  @HostListener('mouseenter') mouseEntro(){
    //this.elem.nativeElement.style.backgroundColor = "yellow";
    this.resaltar('blue');
  }
  @HostListener('mouseleave') mouseSale(){
    this.elem.nativeElement.style.backgroundColor = null;
    this.resaltar('green');
  }

  private resaltar( color:string = 'yellow'){
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
