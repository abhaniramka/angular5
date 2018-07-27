import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  @Input() reqQty: number;
  @Output() result: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  process() {
    console.log('Process');
    this.result.emit(`${this.reqQty} khane ki thaali milegi re baba!!!`);
  }

}
