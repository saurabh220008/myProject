import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormsComponent } from './add-forms/add-forms.component';
import { FormArrayComponent } from './form-array/form-array.component';

const routes: Routes = [
  {
    path:"addForms",
    component: AddFormsComponent
  },
  {
    path:"formArray",
    component: FormArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormRoutingModule { }
