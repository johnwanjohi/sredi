import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-timesheet-summary',
  templateUrl: './timesheet-summary.component.html',
  styleUrl: './timesheet-summary.component.scss'
})
export class TimesheetSummaryComponent implements OnInit {
  timeSheetSummaryData: any;
constructor(private dataServise: DataService, private cdRef: ChangeDetectorRef ) {
  this.timeSheetSummaryData = {};
}
ngOnInit(){
  this.loadChartData();
}

async loadChartData() {
  let hoursWorked=0,trackedHours = 0;
  await this.dataServise.getData('time_sheetsummary.json').subscribe((data) => {
    const timeSheetsExpected = data.reduce((a, b) => {
      return a + b.timesheetsExpected;
    },0);
    const timeSheetCreated = data.reduce((a, b) => a + b.timesheetsCreated, 0);
    const timesheetsAccepted =  data.reduce((a, b) => a + b.timesheetsAccepted, 0);
    const missingTimesheets =  data.reduce((a, b) => a + b.missingTimesheets, 0)
    this.timeSheetSummaryData  = Array.from ([
      {title: 'Timesheets Expected',
        value: timeSheetsExpected,
        percentage: (timeSheetsExpected/timeSheetsExpected) * 100 } ,
      {title: 'Timesheets Created',
        value: timeSheetCreated,
      percentage: (
        (timeSheetCreated/timeSheetsExpected)*100 )
      } ,
      {title: 'Timesheets Accepted',
        value:
          (timesheetsAccepted ),
        percentage: ((timesheetsAccepted/timeSheetsExpected )*100)} ,
      {title: 'Missing Timesheets',value:missingTimesheets ,
      percentage: 95}
    ]);
    console.log(this.timeSheetSummaryData);

    this.cdRef.detectChanges();
  });

}


}
