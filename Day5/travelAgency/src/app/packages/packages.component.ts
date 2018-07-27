import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  link1: string;
  link2: string;
  link3: string;

  constructor() { }

  ngOnInit() {
    this.link1 = "assets/images/kashmir.jpg"
    this.link2 = "assets/images/bali.jpg"
    this.link3 = "assets/images/phuket.jpg"
  }

}
