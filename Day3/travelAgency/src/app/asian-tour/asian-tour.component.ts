import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourAdvisorService } from '../tour-advisor.service';

@Component({
  selector: 'app-asian-tour',
  templateUrl: './asian-tour.component.html',
  styleUrls: ['./asian-tour.component.css']
})
export class AsianTourComponent implements OnInit {
  asianTours: Tour[];
  advise: string;
  adviseText: string;

  constructor(private service: TourAdvisorService) { 
    this.asianTours = [
      {tourName:'Phuket', description:'Octopus khane ko milega', 
      image:'assets/images/phuket.jpg', price: 400000},

      {tourName:'Bali', description:'Veg khana nahi milega', 
      image:'assets/images/bali.jpg', price: 50000}
    ];
  }

  ngOnInit() {
    this.service.currentadvise.subscribe(
      value => this.advise = value
    );
  }

  getAsianTours() {
    return this.asianTours;
  }

  setAdvise() {
    this.service.getAdvise(this.adviseText);
  }

}
