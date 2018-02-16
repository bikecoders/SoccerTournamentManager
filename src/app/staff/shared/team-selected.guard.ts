import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';


import { Observable } from 'rxjs/Observable';

import { TeamsService } from '../../teams/shared/teams.service';

@Injectable()
export class TeamSelectedGuard implements CanActivate {

  constructor(
    private teamsService: TeamsService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isTeamSelected = !!this.teamsService.currentTeamEdited;

    // Is the current team selected?
    if (!isTeamSelected) {
      console.log('No team selected...', this.teamsService.currentTeamEdited);
      this.router.navigateByUrl('');
    }

    return !!isTeamSelected;
  }
}
