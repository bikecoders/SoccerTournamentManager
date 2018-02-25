import { TestBed, inject } from '@angular/core/testing';

import { TeamsService } from './teams.service';
import { Team } from './team.model';

describe('TeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamsService]
    });
  });

  it('should be created', inject([TeamsService], (service: TeamsService) => {
    expect(service).toBeTruthy();
  }));

  it('should current team edited be falsy, nothing in the beginning', inject([TeamsService], (service: TeamsService) => {
    expect(service.currentTeamEdited).toBeFalsy();
  }));

  it('should set the current', inject([TeamsService], (service: TeamsService) => {
    const currentTeam = new Team('Diego', 'flag URL', 'shield URL');

    service.setCurrentTeam(currentTeam);

    expect(service.currentTeamEdited).toBeTruthy('should have something');
    expect(Object.is(currentTeam, service.currentTeamEdited)).toBeTruthy('Should be the same team');
  }));

  it('should clear the current team', inject([TeamsService], (service: TeamsService) => {
    service.clearCurrentTeam();
    expect(service.currentTeamEdited).toBeFalsy();
  }));
});

