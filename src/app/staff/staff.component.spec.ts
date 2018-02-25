import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Angular
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Material
import { MatTabsModule } from '@angular/material/tabs';

import { StaffComponent } from './staff.component';
import { TeamsService } from '../teams/shared/teams.service';
import { Team } from '../teams/shared/team.model';

/**
 * Stub for players component
 */
@Component({
  selector: 'app-players',
  template: ''
})
class PlayersStubComponent {}

/**
 * Stub for technicians component
 */
@Component({
  selector: 'app-technicians',
  template: ''
})
class TechniciansStubComponent {}

/**
 * Stub for navigation back component
 */
@Component({
  selector: 'app-navigate-back',
  template: '<ng-content></ng-content>'
})
class NavigationBackStubComponent {}

describe('StaffComponent', () => {
  let component: StaffComponent;
  let fixture: ComponentFixture<StaffComponent>;
  let teamService: TeamsService;
  let spyOnClearCurrentTeam: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StaffComponent,
        NavigationBackStubComponent,
        PlayersStubComponent,
        TechniciansStubComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatTabsModule
      ],
      providers: [
        TeamsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Init team service
    teamService = TestBed.get(TeamsService) as TeamsService;
    // Set current team on the TeamService
    teamService.setCurrentTeam(new Team('France'));

    fixture = TestBed.createComponent(StaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Set the a spy on the clear Current team
    spyOnClearCurrentTeam = spyOn(teamService, 'clearCurrentTeam');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have init the currentTeamName Correctly', () => {
    expect(component.currentTeamName).toBe(teamService.currentTeamEdited.name);
  });

  it('should trigger clearCurrentTeam on destroy', () => {
    fixture.destroy();
    expect(spyOnClearCurrentTeam.calls.any()).toBe(true);
  });

});
