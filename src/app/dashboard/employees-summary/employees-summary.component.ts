import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { DataService } from '../../shared/data.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-employees-summary',
  templateUrl: './employees-summary.component.html',
  styleUrl: './employees-summary.component.scss'
})
export class EmployeesSummaryComponent  implements OnInit {
  public isBrowser: boolean;

  rowData: [];

  columnDefs : ColDef[]= [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Timesheet Expected', field: 'timesheetExpected', sortable: true, filter: true },
    { headerName: 'Unconfirmed Timesheet', field: 'unconfirmedTimesheet', sortable: true, filter: true },
    { headerName: 'Confirmed Timesheet', field: 'confirmedTimesheet', sortable: true, filter: true },
    { headerName: 'Missing Timesheets', field: 'missingTimesheets', sortable: true, filter: true }
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private dataServise: DataService, private cdRef: ChangeDetectorRef ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(){
    this.loadChartData();
  }
  async loadChartData() {
    await this.dataServise.getData('employee_summary.json').subscribe((data) => {
      this.rowData = data;
      this.cdRef.detectChanges();
    });

  }
}
