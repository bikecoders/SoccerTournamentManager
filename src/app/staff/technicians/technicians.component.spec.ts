import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { TechniciansComponent } from './technicians.component';
import { ElementListStubComponent } from '../../../testing';
import { TeamsService } from '../../teams/shared/teams.service';
import { Team } from '../../teams/shared/team.model';
import { Technician } from './shared/technician.model';

describe('TechniciansComponent', () => {
  let component: TechniciansComponent;
  let fixture: ComponentFixture<TechniciansComponent>;
  let teamService: TeamsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TechniciansComponent,
        ElementListStubComponent
      ],
      providers: [TeamsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Get the service
    teamService = TestBed.get(TeamsService);
    // Init service with a team and a technician
    const testTeam = new Team('Germany');
    testTeam.technician.newElement(
      new Technician(testTeam, 'Heinz')
    );
    teamService.setCurrentTeam(testTeam);

    fixture = TestBed.createComponent(TechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the current team\'s technician list', () => {
    expect(Object.is(component.techniciansList, teamService.currentTeamEdited.technician.getElements()))
      .toBeTruthy();
  });

  it('should return \'Technician\' as the type of element', () => {
    expect(component.getType()).toBe('Technician');
  });

  it('should bind the correct properties to the element list component', () => {
    // Get the ElementListComponent instance
    const elementListComponent = fixture.debugElement.query(By.css('app-element-list')).componentInstance as ElementListStubComponent;

    const boundListOnElementList = elementListComponent.list;
    const boundTypeOnElementList = elementListComponent.elementType;

    expect(Object.is(component.techniciansList, boundListOnElementList))
      .toBeTruthy('the element list component should have the same technician list. Bind correct');
    expect(component.getType())
      .toBe(boundTypeOnElementList, 'the element list component should have the same type. Bind correct');
  });
});
