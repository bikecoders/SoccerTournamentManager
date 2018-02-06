import { Player } from './../../player/shared/player.model';
import { Team } from './../../team/shared/team.model';
import { Component, OnInit, Input } from '@angular/core';
import { Technician } from '../../technician/shared/technician-staff.model';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})
export class ElementListComponent implements OnInit {

  /**
   * List of elements to show
   */
  @Input() list;

  constructor() {
  }

  ngOnInit() {
    console.log('Is team?', this.isTeam());
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
    // Teams
    if (this.isTeam()) {
      return (<Team>this.list[index]).flag;
    }

    // Player
    if (this.isTeam()) {
      return (<Player>this.list[index]).picture;
    }

    // Technician
    if (this.isTeam()) {
      // TODO find a defualt profile picture
      return '';
    }
  }

  /**
   * Function to know if the element treated here is a Team
   */
  private isTeam(): boolean {
    return !!(<Team>this.list[0]).shield;
  }

  /**
   * Function to know if the element treated here is a Player
   */
  private isPlayer(): boolean {
    return !!(<Player>this.list[0]).Position;
  }

  /**
   * Function to know if the element treated here is a Technician
   */
  private isTechnician(): boolean {
    return !!(<Technician>this.list[0]).role;
  }
}
