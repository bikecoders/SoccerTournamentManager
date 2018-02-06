import { TestBed, inject } from '@angular/core/testing';

import { TechniciansService } from './technicians.service';

describe('TechniciansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechniciansService]
    });
  });

  it('should be created', inject([TechniciansService], (service: TechniciansService) => {
    expect(service).toBeTruthy();
  }));
});
