import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AIDemo';
  public noOfRequirements: number=1;
  // public projectStatus = ["Requirement Phase","Estimation Phase","In Progress","Completed"];
  public userName:string = "";
  public projectName: string = "";
  public projectStatus: string = "";
  public projType: number = 0;

}
