import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToStats () {
    // Close the sidenav an then navigate to stats
    this.sidenav.close().then(() => {
      this.router.navigateByUrl('stats');
    });
  }

}
