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
    @Inject(MAT_DIALOG_DATA) public element: Team | Player | Technician | any
  ) { }

  ngOnInit() {
    console.log('New Element on modal', this.element );

    // Get the player positions to generate the dropdown automatically
    if (this.isPlayer()) {
      this.playerPositionOptions = getPlayerPositionOptions();
    }

    // Get the technician roles to generate the dropdown automatically
    if (this.isTechnician()) {
      this.technicianRolesOptions = getTechnicianRolesOptions();
      this.nationalitiesList = NATIONALITIES;
    }
  }

  /**
   * The element is a TEAM instance?
   */
  isTeam() {
    return this.element instanceof Team;
  }

  /**
   * The element is a Player instance?
   */
  isPlayer() {
    return this.element instanceof Player;
  }

  /**
   * The element is a Technician instance?
   */
  isTechnician() {
    return this.element instanceof Technician;
  }

  /**
   * Just close this dialog
   */
  closeDialog() {
    this.dialogRef.close();
  }

}
