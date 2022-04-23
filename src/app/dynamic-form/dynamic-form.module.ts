import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { AddFormsComponent } from './add-forms/add-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';


@NgModule({
  declarations: [
    AddFormsComponent,
    FormArrayComponent
  ],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DynamicFormModule { }
