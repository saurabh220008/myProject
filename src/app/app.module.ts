import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StepLogInComponent } from './MyComponents/step-log-in/step-log-in.component';
import { CurdModule } from './curd/curd.module';
@NgModule({
  declarations: [
    AppComponent,
    StepLogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserModule,
    NgbModule,
    HttpClientModule,
    CurdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
