import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  show = true;
  constructor() { 
    console.log('Baap hai idhar');
  }

  ngOnInit() {
    console.log('Baap ko ungli mat kar');
  }

  toggle() {
    this.show = !this.show ? true : false;
  }

}
