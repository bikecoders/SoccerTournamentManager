import { DebugElement } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Team } from '../app/teams/shared/team.model';
import { Player } from '../app/staff/players/shared/player.model';
import { Technician } from '../app/staff/technicians/shared/technician.model';

// See https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
/**
 * Button events to pass to `DebugElement.triggerEventHandler` for RouterLink event handler
 */
export const ButtonClickEvents = {
  left: { button: 0 },
  right: { button: 2 }
};

/**
 * Simulate element click. Defaults to mouse left-button click event.
 */
export function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}


/**
 * Stub for element list component
 */
@Component({
  selector: 'app-element-list',
  template: ''
})
export class ElementListStubComponent {
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

  constructor() {
    this.actionOnItem = new EventEmitter<Team | Player | Technician>();
  }

  clickOn(index = 0) {
    this.actionOnItem.emit(this.list[index]);
  }
}
