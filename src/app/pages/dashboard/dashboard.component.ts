import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  currentTheme:any;
  type = 'Area';
  types = ['Jakarta'];
  areai = 'Month';
  areas = ['Jan 2018', 'Feb 2018', 'March 2018', 'April 2018', 'May 2018', 'June 2018'];

  constructor(private routes:Router) {

  }
  goAway(){
    this.routes.navigateByUrl('/pages/maps/gmaps')
  }
}
