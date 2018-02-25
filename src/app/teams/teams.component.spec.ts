import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RouterStub } from '../../testing/router-stubs';
import { ElementListStubComponent } from '../../testing';

import { TeamsComponent } from './teams.component';
import { Team } from './shared/team.model';
import { Player } from '../staff/players/shared/player.model';
import { Technician } from '../staff/technicians/shared/technician.model';
import { TeamsService } from './shared/teams.service';
import { Router } from '@angular/router';

describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;
  let teamsService: TeamsService;
  let spyOnGetElements: jasmine.Spy;
  let elementListComponent: ElementListStubComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsComponent, ElementListStubComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        TeamsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Spy on getElements of TeamService to put custom data
    spyOnGetElements = spyOn(TestBed.get(TeamsService), 'getElements').and.returnValue(
      [new Team('Germany'), new Team('Italy')]
    );

    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    // TeamService actually injected into the component
    teamsService = fixture.debugElement.injector.get(TeamsService);
    // Get the ElementListComponent instance
    elementListComponent = fixture.debugElement.query(By.css('app-element-list')).componentInstance as ElementListStubComponent;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the team list', () => {
    expect(Object.is(component.teamList, teamsService.getElements())).toBeTruthy();
  });

  it('should return \'Team\' as the type of element', () => {
    expect(component.getType()).toBe('Team');
  });

  it('should set current team edited and navigate to teams/staff when click a team', () => {
    // The spy for location back
    const router = fixture.debugElement.injector.get(Router);
    const spyRouterNavigateByUrl = spyOn(router, 'navigateByUrl');

    expect(spyRouterNavigateByUrl.calls.any()).toBe(false, 'any team was selected, not navigate');

    // Test the click on team
    // Subscribe to get the clicked team on the Element List Component
    elementListComponent.actionOnItem
      .subscribe((selectedTeam: Team) => {
        // Should set the clicked team as the current team edited
        expect(Object.is(selectedTeam, teamsService.currentTeamEdited))
          .toBeTruthy('The clicked team should be equal to the current team edited in the team service');
      });

    // Simulate a team clicked on the second element
    elementListComponent.clickOn();

    // Should be call navigateByUrl
    expect(spyRouterNavigateByUrl.calls.any()).toBe(true, 'a team was selected, should navigate');

    // Should be in 'teams/staff' url
    const urlVisited = spyRouterNavigateByUrl.calls.mostRecent().args[0];
    expect(urlVisited).toBe('teams/staff', 'a team was selected, should navigate to \'teams/staff\'');

  });

  it('should bind the correct properties to the element list component', () => {
    const boundListOnElementList = elementListComponent.list;
    const boundTypeOnElementList = elementListComponent.elementType;

    expect(Object.is(component.teamList, boundListOnElementList))
      .toBeTruthy('the element list component should have the same team list. Bind correct');
    expect(component.getType())
      .toBe(boundTypeOnElementList, 'the element list component should have the same type. Bind correct');
  });

});
