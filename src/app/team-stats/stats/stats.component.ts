import { TeamsService } from './../team-list/shared/teams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(
    private teamsService: TeamsService
  ) { }

  ngOnInit() {
  }

  /**
   * How many teams are registered
   */
  howManyTeamsAreRegistered(): Number {
    return this.teamsService.getElements().length;
  }

}
