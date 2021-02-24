import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string,  mostrar: boolean = false): unknown {
    return (mostrar) ? '*'.repeat(value.length) : value ;
  }

}
