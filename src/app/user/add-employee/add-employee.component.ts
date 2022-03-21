import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { empModel } from '../emp.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  formsubmit: boolean;
  constructor(private fb : FormBuilder, private service: EmployeeServiceService) { }
  addEmp: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  empobj : empModel = new empModel();

  ngOnInit(): void {

    this.addEmp = this.fb.group({

      EmpId: ["", Validators.required],
      EmployeeName: ["", Validators.required],
      DOB: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]],
      Gender: ["", Validators.required],
      DeptId: ["", Validators.required],
      file: ["", Validators.required]
    });

  }

  onSubmit(form : FormGroup){
    debugger;
    if(this.addEmp.valid){
      this.empobj  = form.value;
      this.service.postEmpDetails(this.empobj).subscribe(data => {
        console.log(data);
      });
    }

  }

  get f(){
    return this.addEmp.controls;
  }
}
