import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data/';
  private startDateSubject = new BehaviorSubject<Date | null>(null);
  private endDateSubject = new BehaviorSubject<Date | null>(null);

  startDate$: Observable<Date | null> = this.startDateSubject.asObservable();
  endDate$: Observable<Date | null> = this.endDateSubject.asObservable();

  constructor(private http: HttpClient) {}

  getData(endPoint: string): Observable<any> {
    return this.http.get<any>(`${this.dataUrl}${endPoint}`);
  }
  setStartDate(date: Date | null): void {
    this.startDateSubject.next(date);
  }

  setEndDate(date: Date | null): void {
    this.endDateSubject.next(date);
  }

  resetDates(): void {
    this.startDateSubject.next(null);
    this.endDateSubject.next(null);
  }

}
