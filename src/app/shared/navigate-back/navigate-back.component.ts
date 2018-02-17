import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigate-back',
  templateUrl: './navigate-back.component.html',
  styleUrls: ['./navigate-back.component.scss']
})
export class NavigateBackComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

}
