import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Custom testing tools
import { LocationStub } from '../../../testing/router-stubs';
import { click } from '../../../testing';

// Angular
import { Location } from '@angular/common';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavigateBackComponent } from './navigate-back.component';


describe('NavigateBackComponent', () => {
  let component: NavigateBackComponent;
  let fixture: ComponentFixture<NavigateBackComponent>;
  // The spy for location back
  let spyLocationBack: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateBackComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatToolbarModule
      ],
      providers: [
        { provide: Location, useClass: LocationStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateBackComponent);
    component = fixture.componentInstance;

    // Location actually injected into the component
    const locationService = fixture.debugElement.injector.get(Location) as LocationStub;
    spyLocationBack = spyOn(locationService, 'back');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not trigger go back OnInit', () => {
    expect(spyLocationBack.calls.any()).toBe(false, 'go back not yet called');
  });

  it('should go back when click GoBack', () => {
    const goBackButton = fixture.debugElement.query(By.css('button'));
    click(goBackButton);

    expect(spyLocationBack.calls.any()).toBe(true, 'go back not yet called');
  });
});
