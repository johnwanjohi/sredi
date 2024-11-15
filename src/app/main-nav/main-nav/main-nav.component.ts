import { Component, inject,  OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss', './input-controls-outline.scss'],
})
export class MainNavComponent implements OnInit {
  startDate: string = '01-01-2023';
  endDate: string = '12-12-23';
  isDarkMode: boolean = false;
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  ngOnInit() {
    this.startDate = '01-01-2023';
    this.endDate = '12-12-23';
  }
}
