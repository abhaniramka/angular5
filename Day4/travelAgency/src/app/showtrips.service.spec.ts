import { TestBed, inject } from '@angular/core/testing';

import { ShowtripsService } from './showtrips.service';

describe('ShowtripsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowtripsService]
    });
  });

  it('should be created', inject([ShowtripsService], (service: ShowtripsService) => {
    expect(service).toBeTruthy();
  }));
});
