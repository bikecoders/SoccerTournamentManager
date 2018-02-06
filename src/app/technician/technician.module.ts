import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechniciansService } from './shared/technicians.service';
import { TechnicianListComponent } from './technician-list/technician-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TechnicianListComponent],
  providers: [TechniciansService]
})
export class TechnicianModule { }
