import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { OperationComponent } from './operation/operation.component';

const routes: Routes = [
  {
    path: "operation",
    component: OperationComponent
  },
  {
    path: "insert/:sid",
    component: InsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurdRoutingModule { }
