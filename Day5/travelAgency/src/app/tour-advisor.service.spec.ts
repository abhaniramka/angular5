import { TestBed, inject } from '@angular/core/testing';

import { TourAdvisorService } from './tour-advisor.service';

describe('TourAdvisorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourAdvisorService]
    });
  });

  it('should be created', inject([TourAdvisorService], (service: TourAdvisorService) => {
    expect(service).toBeTruthy();
  }));
});
