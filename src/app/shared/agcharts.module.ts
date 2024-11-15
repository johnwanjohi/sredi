import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgCharts } from 'ag-charts-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgCharts
  ],
  exports: [
    AgCharts
  ]
})
export class AgchartsModule { }
