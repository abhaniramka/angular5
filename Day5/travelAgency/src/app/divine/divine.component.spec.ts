import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivineComponent } from './divine.component';

describe('DivineComponent', () => {
  let component: DivineComponent;
  let fixture: ComponentFixture<DivineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
