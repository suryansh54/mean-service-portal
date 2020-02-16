import { Component, OnInit } from '@angular/core';
import { DashboardService } from './Service/dashboard.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  /*name: string = "Suryansh";
  age: number = 25;
  grocery: Array<number> = [1,2,3,4,5,89,0]
  employeeData: any;*/



  profile = new FormGroup({
    name: new FormControl("Suryansh"),
    email: new FormControl("suryansh@gmail.com"),
  })

  profileFormSubmit() {
    console.log(this.profile.value)
  }

  constructor(private dashboardService: DashboardService) {
    // console.log("Constructor Called from APP Component");
    // this.name = "Rahul";
  }


  ngOnInit() {
  /*  // console.log("ngOnInit Called from APP Component")
    // console.log(this.dashboardService.dummyDataService())
    this.dashboardService.dummyDataService().subscribe(data => {
      // console.log(data)
    })

    this.dashboardService.serverCommunication().subscribe((data:any) => {
      // console.log(data)
      this.employeeData = data.data;
    })*/
  }

  ngDoCheck() {
    // console.log("ngDoCheck from app Component")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy Called from app Component")
  }
}
