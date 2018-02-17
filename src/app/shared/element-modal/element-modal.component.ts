import { Component, OnInit, Inject } from '@angular/core';

// Material
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { Technician, getTechnicianRolesOptions } from './../../staff/technicians/shared/technician.model';
import { Player, getPlayerPositionOptions } from './../../staff/players/shared/player.model';
import { Team } from './../../teams/shared/team.model';
import { NATIONALITIES } from './../nationalities-list';


@Component({
  selector: 'app-element-modal',
  templateUrl: './element-modal.component.html',
  styleUrls: ['./element-modal.component.scss']
})
export class ElementModalComponent implements OnInit {

  /**
   * The element that is being created
   */
  element: Team | Player | Technician | any;

  /**
   * The element type
   */
  elementType: string;

  /**
   * Array of objects with the player positions grouped
   */
  playerPositionOptions;

  /**
   * Array of technician roles
   */
  technicianRolesOptions;

  /**
   * Array of nationalities
   */
  nationalitiesList;

  /**
   * The constructor of the class
   *
   * @param dialogRef reference the dialog to be able to manipulate it
   *
   * @param element element to create/edit.
   *                If we are creating the element will be empty
   */
  constructor(
    private dialogRef: MatDialogRef<ElementModalComponent>,
    // The element to render/create
    @Inject(MAT_DIALOG_DATA) data: any
    // The type of element that we are creating
  ) {
    // Set element type
    this.elementType = data.elementType;

    // Set element
    this.element = data.element;
  }

  ngOnInit() {
    console.log('New Element on modal', this.element );

    // The load the options of the dropdown
    switch (this.elementType) {

      case 'Player':
        this.playerPositionOptions = getPlayerPositionOptions();
        break;

      case 'Technician':
        this.technicianRolesOptions = getTechnicianRolesOptions();
        this.nationalitiesList = NATIONALITIES;
        break;
    }
  }

  /**
   * Just close this dialog
   */
  closeDialog() {
    this.dialogRef.close();
  }

}
