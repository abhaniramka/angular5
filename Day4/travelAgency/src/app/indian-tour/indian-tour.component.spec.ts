import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianTourComponent } from './indian-tour.component';

describe('IndianTourComponent', () => {
  let component: IndianTourComponent;
  let fixture: ComponentFixture<IndianTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
