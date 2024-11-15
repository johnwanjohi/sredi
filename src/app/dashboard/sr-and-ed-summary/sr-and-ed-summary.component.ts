import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ColDef} from 'ag-grid-community';
import {DataService} from '../../shared/data.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-sr-and-ed-summary',
  templateUrl: './sr-and-ed-summary.component.html',
  styleUrl: './sr-and-ed-summary.component.scss'
})
export class SrAndEdSummaryComponent  implements OnInit{
  public isBrowser: boolean;

  rowData: [];

  columnDefs : ColDef[]= [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Tracking Score', field: 'TrackingScore', sortable: true, filter: true },
    { headerName: 'Expected Hours', field: 'ExpectedHours', sortable: true, filter: true },
    { headerName: 'Worked Hours', field: 'WorkedHours', sortable: true, filter: true },
    { headerName: 'Tracked Hours', field: 'TrackedHours', sortable: true, filter: true },
    { headerName: 'New', field: 'New', sortable: true, filter: true },
    { headerName: 'Fiber', field: 'Fiber', sortable: true, filter: true },
    { headerName: 'New', field: 'New', sortable: true, filter: true },
    { headerName: 'FD Test', field: 'FDTest', sortable: true, filter: true },
    { headerName: 'SR&ED Hour', field: 'SrandedHour', sortable: true, filter: true }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object,private dataServise: DataService, private cdRef: ChangeDetectorRef ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(){
    this.loadChartData();
  }
  async loadChartData() {
    await this.dataServise.getData('sranded_summary.json').subscribe((data) => {
      this.rowData = data;
      this.cdRef.detectChanges();
    });

  }

}
