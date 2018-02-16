import { ElementModalComponent } from './../element-modal/element-modal.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Material
import { MatDialog } from '@angular/material/dialog';

import { TeamsService } from '../../teams/shared/teams.service';

// Models
import { Team } from '../../teams/shared/team.model';
import { Player } from '../../staff/players/shared/player.model';
import { Technician } from '../../staff/technicians/shared/technician.model';


@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {

  /**
   * List of elements to show
   */
  @Input() list: Array<Team | Player | Technician>;

  /**
   * Material Icon ID to render
   */
  @Input() icon: string;

  /**
   * The type of element that we are rendering
   */
  @Input() elementType: string;

  /**
   * Event when clicking an element of the list
   */
  @Output() actionOnItem: EventEmitter<Team | Player | Technician>;

  constructor(
    private dialog: MatDialog,
    private teamsService: TeamsService
  ) {
    // Default icon
    this.icon = 'person_add';

    // init event emitter
    this.actionOnItem = new EventEmitter<Team | Player | Technician>();
  }

  ngOnInit() {
  }

  /**
   * Get the name of the element. All our structures has name so me don't
   * need to check what type of element is
   *
   * @param index index of the element to get
   */
  getName(index: number) {
    return this.list[index].name;
  }

  /**
   * Get the image of the element.
   * We need to check what type of element is to know what attribute access
   *
   * @param index index of the element to get
   */
  getImage(index: number) {
    const element = this.list[index];

    // In case that we are rendering....
    switch (this.elementType) {
      // Teams
      case Team.name:
        return (<Team>element).flag;

        // Players
      case Player.name:
        return (<Player>element).picture;

      // Technician
      case Technician.name:
        return 'assets/img/default-profile.png';
    }
  }

  /**
   * Function to open a dialog with the intentions to create a new element
   */
  newElementModal() {
    // To set the type of element. Will verify the type of element and will create a
    // new element of that type
    let emptyElement;

    // In case that we are rendering....
    switch (this.elementType) {
      // Teams
      case Team.name:
        emptyElement = new Team();
        break;

      // Players
      case Player.name:
        emptyElement = new Player(this.teamsService.currentTeamEdited);
        break;

      // Technician
      case Technician.name:
        emptyElement = new Technician(this.teamsService.currentTeamEdited);
        break;
    }

    // Open the dialog with the new empty element
    const dialogRef = this.dialog.open(ElementModalComponent, {
      data: emptyElement,
    });

    // When the dialog is closed
    dialogRef.afterClosed().subscribe(newElement => {
      // If a element was provided
      if (newElement) {
        console.log('New Element Added', newElement);
        // Add that element to the list
        this.list.push(newElement);
      }
    });
  }

  /**
   * Emit a signal when an element of the list was clicked
   *
   * @param element Element clicked
   */
  clickOnItem(element: Team | Player | Technician) {
    console.log('Click on element LIST', element);

    this.actionOnItem.emit(element);
  }

}
