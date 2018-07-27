import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  currentDate = new Date();
  title = 'Ghoom ke aao Travel Agency';

  constructor(private router: Router) {

    this.logo = '../assets/images/Flight.jpg';
    console.log('Header component initialized');
  }

  ngOnInit() {
    console.log('Header component Ng on init called!!!');
  }

  logout() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true')
      localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

}
