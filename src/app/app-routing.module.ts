import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthGuard } from './Authgurd/login-auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { StepLogInComponent } from './MyComponents/step-log-in/step-log-in.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/stepform',
  //   pathMatch: 'full',
  // },
  {
    path: 'stepform',
    component: StepLogInComponent,
    // canActivate:[LoginAuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'curd',
    loadChildren: () => import('./curd/curd.module').then((m) => m.CurdModule),
    canActivate: [LoginAuthGuard],
  },
  {
    path: 'user',

    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'curd',
    component: MainLayoutComponent,
    loadChildren: () => import('./curd/curd.module').then((m) => m.CurdModule),
    canActivate: [LoginAuthGuard],
  },
  // {
  //   path: "account",
  //   loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  // },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'dynamicForm',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./dynamic-form/dynamic-form.module').then(
        (m) => m.DynamicFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
