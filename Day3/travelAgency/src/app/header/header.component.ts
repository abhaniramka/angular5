import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  currentDate = new Date();
  title = 'Ghoom ke aao Travel Agency';

  constructor() { 

    this.logo = '../assets/images/Flight.jpg';
    console.log('Header component initialized');
  }

  ngOnInit() {
    console.log('Header component Ng on init called!!!');
  }

}
