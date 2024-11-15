import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AgChartOptions} from 'ag-charts-community';
import {DataService} from '../../shared/data.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-project-hours',
  templateUrl: './project-hours.component.html',
  styleUrl: './project-hours.component.scss'
})
export class ProjectHoursComponent  implements OnInit {
  public chartOptionsBar: AgChartOptions;
  public isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private dataServise: DataService, private cdRef: ChangeDetectorRef ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.chartOptionsBar = {};
  }
  ngOnInit(){
    this.loadChartData();
  }
  async loadChartData() {
    let hoursWorked=0,trackedHours = 0;
    await this.dataServise.getData('project_hours.json').subscribe((data) => {

      let chartData =

      this.chartOptionsBar = {
        title: {
          text: 'Project Hours',
          fontSize: 18
        },
        data: data,
        series: [
          {
            type: "bar",
            xKey: 'projectName',
            yKey: 'projectHours',
            yName: 'Project Hours'
          }
        ],
        axes: [
          {
            type: 'category',
            position: 'bottom',
            title: { text: 'Project Hours' },
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
