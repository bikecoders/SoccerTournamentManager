import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { TeamStatsModule } from './team-stats/team-stats.module';
import { PlayerTechnicianModule } from './player-technician/player-technician.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,

    // Material
    MatToolbarModule,

    TeamStatsModule,
    PlayerTechnicianModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
