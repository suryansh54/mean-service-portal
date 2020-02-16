import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
    // console.log("Constructor Called from dashboard Component");
  }

  ngOnInit() {
    // console.log("ngOnInit Called from dashboard Component")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Called from dashboard Component")
  }
}
