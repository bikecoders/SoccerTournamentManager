import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { TeamSelectedGuard } from './staff/shared/team-selected.guard';

const appRoutes: Routes = [
  { path: 'teams', component: HomeComponent},
  { path: 'stats', component: StatsComponent},
  { path: 'teams/staff', component: StaffComponent, canActivate: [TeamSelectedGuard] },
  { path: '', redirectTo: '/teams', pathMatch: 'full' },
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