import { Component, OnInit, OnChanges, Input, SimpleChanges, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {

  @Input() city;
  constructor() { 
    console.log('Chinna babu');
  }

  ngOnInit() {
    console.log('Bache ki jaan lega kya');
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('Maa ka ladla bigaad gaya');
  }

  ngAfterContentInit(): void {
    console.log('Ab aur kya baaki hai');
  }

  ngOnDestroy(): void {
    console.log('Sab khatam ho gaya');
  }

}
