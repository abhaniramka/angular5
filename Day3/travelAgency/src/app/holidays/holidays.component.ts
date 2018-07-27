import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';
import { ShowtripsService } from '../showtrips.service';
import { Weekendtrip } from '../weekendtrip';
import { IndianTourComponent } from '../indian-tour/indian-tour.component';
import { Tour } from '../tour';
import { AsianTourComponent } from '../asian-tour/asian-tour.component';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
  providers: [ShowtripsService]
})
export class HolidaysComponent implements OnInit, AfterContentInit {
  
  ngAfterContentInit(): void {
    const indTour = this.indianTour.getIndianTours();
    this.indiatours = this.indianTour.indianTours;
    const asiaTour = this.asianTour.getAsianTours();
    this.asiantours = this.asianTour.asianTours;
  }

  weekEndTripList: Weekendtrip[];
  oneDayTripList: Weekendtrip[];
  weekEndPickUpPoints: any;
  qty = 1;
  msg: string;
  tours = new Array<Tour[]>();
  indiatours: Tour[];
  asiantours: Tour[];
  @ViewChild(IndianTourComponent) indianTour: IndianTourComponent;
  @ViewChild(AsianTourComponent) asianTour: AsianTourComponent;

  constructor(private service: ShowtripsService) { }

  ngOnInit() {
    this.service.findweekEnd().subscribe(resp => this.weekEndTripList = resp);
    this.service.findoneDay().subscribe(resp => this.oneDayTripList = resp);
  }

  show(destination) {
    console.log(destination);
    if (destination.toUpperCase() === 'VIJAYWADA')
      this.weekEndPickUpPoints = ['Miyapur', 'JNTU', 'Madhapur'];
    else
      this.weekEndPickUpPoints = ['Miyapur', 'Alwyn', 'Lingampally'];
  }

  display(destination) {
    console.log(destination);
    this.weekEndPickUpPoints = ['Miyapur', 'JNTU', 'KPHB'];
  }

  onChange(val) {
    this.msg = val;
  }

}
