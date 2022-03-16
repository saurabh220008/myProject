import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import Swal from 'sweetalert2';

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
    console.log(id);


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success px-2',
        cancelButton: 'btn btn-danger px-2'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.student.splice(id, 1);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your record is safe :)',
          'error'
        )
      }
    })


  }

}
