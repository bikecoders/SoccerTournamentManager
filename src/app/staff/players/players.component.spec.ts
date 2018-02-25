import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { PlayersComponent } from './players.component';
import { ElementListStubComponent } from '../../../testing';
import { TeamsService } from '../../teams/shared/teams.service';
import { Team } from '../../teams/shared/team.model';
import { Player } from './shared/player.model';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let teamService: TeamsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayersComponent,
        ElementListStubComponent
      ],
      providers: [TeamsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Get the service
    teamService = TestBed.get(TeamsService);
    // Init service with a team and a player
    const testTeam = new Team('Germany');
    testTeam.players.newElement(
      new Player(testTeam, 'Heinz')
    );
    teamService.setCurrentTeam(testTeam);

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the current team\'s players list', () => {
    expect(Object.is(component.playersList, teamService.currentTeamEdited.players.getElements()))
      .toBeTruthy();
  });

  it('should return \'Player\' as the type of element', () => {
    expect(component.getType()).toBe('Player');
  });

  it('should bind the correct properties to the element list component', () => {
    // Get the ElementListComponent instance
    const elementListComponent = fixture.debugElement.query(By.css('app-element-list')).componentInstance as ElementListStubComponent;

    const boundListOnElementList = elementListComponent.list;
    const boundTypeOnElementList = elementListComponent.elementType;

    expect(Object.is(component.playersList, boundListOnElementList))
      .toBeTruthy('the element list component should have the same players list. Bind correct');
    expect(component.getType())
      .toBe(boundTypeOnElementList, 'the element list component should have the same type. Bind correct');
  });

});

