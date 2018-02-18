import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgGistModule } from 'ng-gist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StaffModule } from './staff/staff.module';

import { TeamsComponent } from './teams/teams.component';
import { TeamsService } from './teams/shared/teams.service';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    StatsComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgGistModule,

    // Material
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,

    StaffModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
