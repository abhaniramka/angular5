import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit, OnDestroy {
  val: any;
  data = '';
  sub: any;
  places: Map<string, string>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.places = new Map<string, string>();
    this.places.set('101', 'Snowy hills!!');
    this.places.set('102', 'Pata nahi kaha hai');
    this.places.set('103', 'Never been here');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(routeParam => {
      console.log(routeParam['code']);
      this.val = routeParam['code'];
      if (this.val !== undefined)
        this.data = this.places.get(this.val);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  details(value) {
    return "Testing";
  }

  showDetails(value) {
  }

}
