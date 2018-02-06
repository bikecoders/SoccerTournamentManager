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
  @Input() list: Array<Team | Player | Technician>;

  /**
   * Material Icon ID to render
   */
  @Input() icon: string;

  constructor() {
    // Default icon
    this.icon = 'person_add';
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
