import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Models
import { Team } from './../../team-stats/team-list/shared/team.model';
import { Player } from './../../player-technician/player-list/shared/player.model';
import { Technician } from './../../player-technician/technician-list/shared/technician-staff.model';

@Component({
  selector: 'app-element-modal',
  templateUrl: './element-modal.component.html',
  styleUrls: ['./element-modal.component.scss']
})
export class ElementModalComponent implements OnInit {

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
