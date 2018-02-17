import { TestBed, async, inject } from '@angular/core/testing';

import { TeamSelectedGuard } from './team-selected.guard';

describe('TeamSelectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamSelectedGuard]
    });
  });

  it('should ...', inject([TeamSelectedGuard], (guard: TeamSelectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
