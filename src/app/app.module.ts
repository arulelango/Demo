import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResultsComponent } from './results/results.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResultsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  public noOfRequirements: string="";



}
