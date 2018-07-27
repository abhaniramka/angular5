import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianTourComponent } from './asian-tour.component';

describe('AsianTourComponent', () => {
  let component: AsianTourComponent;
  let fixture: ComponentFixture<AsianTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsianTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsianTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
