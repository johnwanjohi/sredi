import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverallHoursComponent } from './overall-hours/overall-hours.component';
import { TimesheetSummaryComponent } from './timesheet-summary/timesheet-summary.component';
import { ProjectedHoursComponent } from './projected-hours/projected-hours.component';
import { EmployeesSummaryComponent } from './employees-summary/employees-summary.component';
import { SrAndEdSummaryComponent } from './sr-and-ed-summary/sr-and-ed-summary.component';
import {DataService} from '../shared/data.service';
import {AgchartsModule} from '../shared/agcharts.module';

@NgModule({
  declarations: [
    DashboardComponent,
    OverallHoursComponent,
    TimesheetSummaryComponent,
    ProjectedHoursComponent,
    EmployeesSummaryComponent,
    SrAndEdSummaryComponent,
  ],
  imports: [CommonModule, MaterialModule, AgchartsModule],
  providers:[DataService]
})
export class DashboardModule {}