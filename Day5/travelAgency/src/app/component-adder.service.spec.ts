import { TestBed, inject } from '@angular/core/testing';

import { ComponentAdderService } from './component-adder.service';

describe('ComponentAdderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentAdderService]
    });
  });

  it('should be created', inject([ComponentAdderService], (service: ComponentAdderService) => {
    expect(service).toBeTruthy();
  }));
});
