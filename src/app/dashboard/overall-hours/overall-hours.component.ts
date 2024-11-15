import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID,} from '@angular/core';
import {AgChartOptions} from 'ag-charts-community';
import { isPlatformBrowser } from '@angular/common';
import {DataService} from '../../shared/data.service';


@Component({
  selector: 'app-overall-hours',
  templateUrl: './overall-hours.component.html',
  styleUrl: './overall-hours.component.scss'
})
export class OverallHoursComponent implements OnInit {
  public chartOptionsDonut: AgChartOptions;
  public chartOptionsBar: AgChartOptions;
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private dataServise: DataService, private cdRef: ChangeDetectorRef ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.chartOptionsDonut = {};
    this.chartOptionsBar = {};
  }
  ngOnInit(){
    this.loadChartData();
  }

  async loadChartData() {
    let hoursWorked=0,trackedHours = 0;
    await this.dataServise.getData('hours.json').subscribe((data) => {
      let donutData  = Array.from ([
        { hours: "Hours Worked", value: data.reduce((a, b) => {
          return a + b.hoursWorked;
          },0) },
        { hours: "Tracked Hours", value: data.reduce((a, b) => a + b.trackedHours, 0) }
      ]);


      this.chartOptionsDonut ={
        minWidth:0,
        data: donutData,
          title: {
        text: "Overall Hours",
      },
        series: [
          {
            type: "donut",
            calloutLabelKey: "hours",
            angleKey: "value",
            innerRadiusRatio: 0.9,
            innerLabels: [
              {
                text: "Total Investment",
                fontWeight: "bold",
              },
              {
                text: "$100,000",
                spacing: 4,
                fontSize: 48,
                color: "green",
              },
            ],
            innerCircle: {
              fill: "#c9fdc9",
            },
          },
        ],
      };
      this.chartOptionsBar = {
        title: {
          text: 'Monthly Hours Worked vs. Tracked Hours',
          fontSize: 18
        },
        data: data,
        series: [
          {
            type: "bar",
            xKey: 'date',
            yKey: 'hoursWorked',
            yName: 'Hours Worked'
          },
          {
            type: "bar",
            xKey: 'date',
            yKey: 'trackedHours',
            yName: 'Tracked Hours'
          }
        ],
        axes: [
          {
            type: 'category',
            position: 'bottom',
            title: { text: 'Month' },
          },
          {
            type: 'number',
            position: 'left',
            title: { text: 'Hours' },
          }
        ],
        legend: {
          position: 'bottom'
        },
        minWidth:0
      };
      this.cdRef.detectChanges();
    });

  }


}
