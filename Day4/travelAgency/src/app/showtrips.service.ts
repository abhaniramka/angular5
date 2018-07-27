import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Weekendtrip } from './weekendtrip';

@Injectable({
  providedIn: 'root'
})
export class ShowtripsService {
  weekEndURL = 'http://localhost:3000/weekendTrips';
  oneDayURL = 'http://localhost:3000/oneDayTrips';

  constructor(private http: HttpClient) { }

  findweekEnd(): Observable<Weekendtrip[]> {
    return this.http.get<Weekendtrip[]>(this.weekEndURL);
  }

  findoneDay(): Observable<Weekendtrip[]> {
    return this.http.get<Weekendtrip[]>(this.oneDayURL);
  }
}
