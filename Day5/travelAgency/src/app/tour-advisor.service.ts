import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourAdvisorService {

  advisor: BehaviorSubject<string> = new BehaviorSubject<string>("Anytime is good!!");

  currentadvise = this.advisor.asObservable();

  constructor() { }

  getAdvise(message: string) {
    this.advisor.next(message);
  }

}
