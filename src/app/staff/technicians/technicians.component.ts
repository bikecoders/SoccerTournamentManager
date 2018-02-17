import { Component, OnInit } from '@angular/core';

import { Technician } from './shared/technician.model';
import { TeamsService } from './../../teams/shared/teams.service';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.scss']
})
export class TechniciansComponent implements OnInit {

  /**
   * The list of the technicians
   */
  techniciansList: Array<Technician>;

  constructor(
    private teamsService: TeamsService,
  ) { }

  ngOnInit() {
    // make a copy of the teams
    this.techniciansList = this.teamsService.currentTeamEdited.technician.getElements();
  }

  /**
   * Return type of element of this list
   */
  getType(): string {
    return Technician.name;
  }

}
