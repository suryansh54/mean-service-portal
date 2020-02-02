import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = "XYZ";
  age: number = 25;
  grocery: Array<number> = [1,2,3,4,5,89,0]
}
