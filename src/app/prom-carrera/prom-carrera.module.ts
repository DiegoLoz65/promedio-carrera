import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculoComponent } from './calculo/calculo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CalculoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CalculoComponent
  ]
})
export class PromCarreraModule { }
