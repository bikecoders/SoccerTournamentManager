import { Component, OnInit } from '@angular/core';

import { Technician } from './shared/technician-staff.model';
import { TeamsService } from './../../team-stats/team-list/shared/teams.service';

@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrls: ['./technician-list.component.scss']
})
export class TechnicianListComponent implements OnInit {

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
