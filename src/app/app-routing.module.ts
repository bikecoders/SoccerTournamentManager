import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeamStatsComponent } from './team-stats/team-stats.component';
import { PlayerTechnicianComponent } from './player-technician/player-technician.component';

const appRoutes: Routes = [
  { path: 'edit-team', component: PlayerTechnicianComponent },
  { path: 'home', component: TeamStatsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }