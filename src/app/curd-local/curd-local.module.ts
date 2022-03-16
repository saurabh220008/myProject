import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurdLocalRoutingModule } from './curd-local-routing.module';
import { CurdComponent } from './curd/curd.component';


@NgModule({
  declarations: [
    CurdComponent
  ],
  imports: [
    CommonModule,
    CurdLocalRoutingModule
  ]
})
export class CurdLocalModule { }
