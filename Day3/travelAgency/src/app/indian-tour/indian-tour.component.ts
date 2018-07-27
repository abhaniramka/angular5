import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour';
import { TourAdvisorService } from '../tour-advisor.service';

@Component({
  selector: 'app-indian-tour',
  templateUrl: './indian-tour.component.html',
  styleUrls: ['./indian-tour.component.css']
})
export class IndianTourComponent implements OnInit {

  indianTours: Tour[];
  advise: string;
  constructor(private service: TourAdvisorService) { 
    this.indianTours = [
      {tourName:'Kashmir', description:'Aatankvaadi milenge re baba!!', 
      image:'assets/images/kashmir.jpg', price: 40000},

      {tourName:'Andaman', description:'Saaza-e-kaalapaani', 
      image:'assets/images/andaman.jpg', price: 50000}
    ];
  }

  ngOnInit() {
    this.service.currentadvise.subscribe(
      value => this.advise = value
    );
  }

  getIndianTours() {
    return this.indianTours;
  }

}
