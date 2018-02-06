import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { TechnicianModule } from './technician/technician.module';

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
    MatTabsModule,

    TeamModule,
    PlayerModule,
    TechnicianModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
