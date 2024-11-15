import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data/';
  constructor(private http: HttpClient) {}

  getData(endPoint: string): Observable<any> {
    return this.http.get<any>(`${this.dataUrl}${endPoint}`);
  }
}
