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
  {
    path: "curd",
    loadChildren: () => import('./curd/curd.module').then(m => m.CurdModule)
  },
  {
    path:"curdlocal",
    loadChildren:() => import('./curd-local/curd-local.module').then(m =>m.CurdLocalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
