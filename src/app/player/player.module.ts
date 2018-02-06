import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players-list/players.component';
import { PlayersService } from './shared/players.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlayersComponent],
  providers: [PlayersService]
})
export class PlayerModule { }
