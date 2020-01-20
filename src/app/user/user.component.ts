import { AppComponent } from './../app.component';
import { DataserviceService } from './../dataservice.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  projectStatus = ["Requirement Phase","Estimation Phase","In Progress","Completed"];
  // noOfRequirements: string="";

  constructor(private service: DataserviceService,private app: AppComponent) { 
    // this.noOfRequirements = this.app.noOfRequirements;
  }

  
  @Injectable({
    providedIn: 'root',
  })
  
  ngOnInit() {
  }

}
