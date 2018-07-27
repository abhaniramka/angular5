import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  partners: string[];
  social: string[];

  constructor() { 
    this.partners = ["Indigo", "Ola", "Uber", "Something"];
    this.social = ["FB", "Twitter", "Instagram", "LinkedIn"];
  }

  ngOnInit() {
    //this.partners.forEach(p => p., p.value);
  }

}
