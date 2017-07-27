import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ViewEmployeeComponent } from './views/employee/view-employee.component';
import { ViewMainComponent } from './views/main/view-main.component';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    ViewMainComponent,
  ],
  imports: [
    AlertModule.forRoot(),
	  BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    HttpModule //http://www.concretepage.com/angular-2/angular-2-http-post-example
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
