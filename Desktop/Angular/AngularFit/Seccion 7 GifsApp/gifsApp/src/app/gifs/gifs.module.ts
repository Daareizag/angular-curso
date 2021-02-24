import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BucadorComponent } from './bucador/bucador.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [GifsPageComponent, BucadorComponent, ResultadosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
