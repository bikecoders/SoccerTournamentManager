import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TeamSelectedGuard } from './team-selected.guard';

import { TeamsService } from '../../teams/shared/teams.service';
import { RouterStub } from './../../../testing/router-stubs';
import { Team } from '../../teams/shared/team.model';

describe('TeamSelectedGuard', () => {
  let teamSelectedGuard: TeamSelectedGuard;
  let teamsService: TeamsService;
  let router: RouterStub;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useClass: RouterStub },
        TeamSelectedGuard,
        TeamsService
      ]
    });
  });

  beforeEach(() => {
    teamSelectedGuard = TestBed.get(TeamSelectedGuard);
    teamsService = TestBed.get(TeamsService);
    router = TestBed.get(Router);
  });

  it('Should be able to hit route when user selects a team to edit', () => {
    teamsService.setCurrentTeam(new Team());
    expect(teamSelectedGuard.canActivate()).toBe(true);
  });

  it('Should return to home if the team is not selected, accessed directly', () => {
    expect(teamSelectedGuard.canActivate()).toBe(false, 'should be false, not allow to navigate');
    expect(router.currentUrl).toBe('', 'The user should return to home');
  });
});
