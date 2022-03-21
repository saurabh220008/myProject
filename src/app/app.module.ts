import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StepLogInComponent } from './MyComponents/step-log-in/step-log-in.component';
import { CurdModule } from './curd/curd.module';
import { AuthguardServiceService } from './services/authguard-service.service';
import { AccountModule } from './account/account.module';

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
    CurdModule,
    AccountModule,
    FormsModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
