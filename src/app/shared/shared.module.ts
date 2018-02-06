import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementListComponent } from './element-list/element-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ElementListComponent],
  exports: [ElementListComponent]
})
export class SharedModule { }
