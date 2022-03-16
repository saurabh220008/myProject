import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurdRoutingModule } from './curd-routing.module';
import { OperationComponent } from './operation/operation.component';
import { InsertComponent } from './insert/insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OperationComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    CurdRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CurdModule { }
