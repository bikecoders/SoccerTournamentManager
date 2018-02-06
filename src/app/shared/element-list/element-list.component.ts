import { ElementModalComponent } from './../element-modal/element-modal.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Material
import { MatDialog } from '@angular/material/dialog';

// Models
import { Player } from './../../player-technician/player-list/shared/player.model';
import { Team } from './../../team-stats/team-list/shared/team.model';
import { Technician } from './../../player-technician/technician-list/shared/technician-staff.model';

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
   * Event when clicking an element of the list
   */
  @Output() actionOnItem: EventEmitter<Team | Player | Technician>;

  constructor(
    private dialog: MatDialog
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
    // The element to get the image
    const element = this.list[index];

    // Teams
    if (Team.isATeam(<Team> element)) {
      return (<Team>element).flag;
    }

    // TODO modify to adopt classes
    // Player
    if (this.isPlayer()) {
      return (<Player>this.list[index]).picture;
    }

    // TODO modify to adopt classes
    // Technician
    if (this.isTechnician()) {
      // TODO find a default profile picture
      return '';
    }
  }

  /**
   * Function to open a dialog with the intentions to create a new element
   */
  newElementModal() {
    // just to know the type of element managed here
    const currentElementType = this.list[0];

    // To set the type of element. Will verify the type of element and will create a
    // new element of that type
    let emptyElement;

    // Set the New element as a Team
    if (Team.isATeam(<Team> currentElementType)) {
      emptyElement = new Team();
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

  /**
   * Function to know if the element treated here is a Team
   */
  private isTeam(): boolean {
    return this.list[0] instanceof Team;
  }

  /**
   * Function to know if the element treated here is a Player
   */
  private isPlayer(): boolean {
    // TODO pass to class Player
    return !!(<Player>this.list[0]).position;
  }

  /**
   * Function to know if the element treated here is a Technician
   */
  private isTechnician(): boolean {
    // TODO pass to class Technician
    return !!(<Technician>this.list[0]).role;
  }
}
