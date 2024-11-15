import {
  AfterViewInit,
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  MatDatepickerInputEvent,
  MatDateRangeInput,
} from '@angular/material/datepicker';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss', './input-controls-outline.scss'],
})
export class MainNavComponent implements OnInit {
  @ViewChild('dateRangePicker') dateRangePicker: MatDateRangeInput<Date>;
  startDate: string = '01-01-2023';
  endDate: string = '12-12-2023';
  isDarkMode: boolean = false;
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.startDate = '01-01-2023';
    this.endDate = '12-12-2023';
  }
  onStartDateChange(event: MatDatepickerInputEvent<Date>): void {
    // console.log('Start date changed:', event.value);
    this.dataService.setStartDate(event.value);
  }

  onEndDateChange(event: MatDatepickerInputEvent<Date>): void {
    // console.log('End date changed:', event.value);
    this.dataService.setEndDate(event.value);
  }
}
