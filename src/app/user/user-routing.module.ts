import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListingComponent } from './listing/listing.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewSingleEmpComponent } from './view-single-emp/view-single-emp.component';

const routes: Routes = [
  {path:"signIn", component: SignInComponent},
  {path:"logIn", component: LogInComponent},
  {path:"viewSingleEmp", component: ViewSingleEmpComponent},
  {path:"listing", component: ListingComponent},
  {path:"addEmployee", component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
