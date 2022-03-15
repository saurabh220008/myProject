import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepLogInComponent } from './MyComponents/step-log-in/step-log-in.component';

const routes: Routes = [
  {
    path: "stepform",
    component: StepLogInComponent
  },
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }