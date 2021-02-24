import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    // Se valida si no tiene images y retorno noimage.png
    if (!images){
      return 'assets/img/noimage.png';
    }
    // valido si tiene imagen el arreglo
    if (images.length > 0){
      return images[0].url;
    }else{
      return 'assets/img/noimage.png';
    }
  }
}
