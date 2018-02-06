import { ElementModalComponent } from './../element-modal/element-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Material
import { MatDialog } from '@angular/material/dialog';

// Models
import { Player } from './../../player/shared/player.model';
import { Team } from './../../team/shared/team.model';
import { Technician } from '../../technician/shared/technician-staff.model';
import { CrudList } from '../crud-list';

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
   * The route to navigate when the user clicks on item of the list
   */
  @Input() navigationUrl: string;

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {
    // Default icon
    this.icon = 'person_add';

    // Will be null if not provided
    this.navigationUrl = null;
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
   * When the user clicks an element of the list, navigate to the
   * route provided. Will not do anything if no route was provided
   */
  navigate() {
    if (this.navigationUrl) {
      this.router.navigateByUrl(this.navigationUrl);
    }
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
    return !!(<Player>this.list[0]).Position;
  }

  /**
   * Function to know if the element treated here is a Technician
   */
  private isTechnician(): boolean {
    // TODO pass to class Technician
    return !!(<Technician>this.list[0]).role;
  }
}
