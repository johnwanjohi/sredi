import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgCharts } from 'ag-charts-angular';
import {AgGridAngular} from 'ag-grid-angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgCharts,AgGridAngular
  ],
  exports: [
    AgCharts,AgGridAngular
  ]
})
export class AgchartsModule { }
