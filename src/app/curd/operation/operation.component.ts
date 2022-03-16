import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  student: any;
  this: any;

  constructor(private service: EmployeeServiceService, private router: Router) { }

  ngOnInit() {
    // this.getAllEmp();
    this.getdata();
  }
  employeedata: any;
  eid!: number;
  sid!: number;
  stuentdata: any;
  students = [];


  // getAllEmp() {
  //   this.service.getAllEmployee().subscribe(data => {
  //     console.log(JSON.stringify(data));
  //     this.employeedata = data;
  //   });
  // }

  view(id: number) {
    this.eid = id;
    // this.service.getAllEmployee().subscribe(data => {
    //   console.log(JSON.stringify(data));
    //   this.employeedata = data;
    // });
    // this.service.getSingleEmp(this.eid).subscribe(data => {
    //   console.log(JSON.stringify(data));
    //   this.singleEmployeedata = data;
    this.router.navigateByUrl('/user/viewSingleEmp?eid=' + this.eid);
    //   this.singledata.emit(this.singleEmployeedata); 
    // });
  }

  edit(id: number) {
    this.sid = id;
    this.router.navigateByUrl('/curd/insert/' + this.sid);
  }

  getdata() {
    this.student = localStorage.getItem('student');
    this.student = JSON.parse(this.student);
    console.log(this.student)
  }

  delete(id: number) {
    debugger;
    // this.student = localStorage.getItem('student');
    // const studentobj = JSON.stringify(this.student);
    // this.students.push(studentobj);
    console.log(id);

    this.student.splice(id, 1);
  }

}
