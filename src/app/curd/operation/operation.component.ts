import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  student: any;
  singlestudent: any;
  this: any;
  closeResult = '';

  constructor(private service: EmployeeServiceService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    // this.getAllEmp();
    this.getdata();
  }
  employeedata: any;
  eid!: number;
  sid!: number;
  stuentdata: any;
  students = [];
  id: number;


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

  open(content: any, i: number) {
    debugger;
    this.singlestudent = this.student[i];
    this.id = this.student[i];
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
        localStorage.setItem("student", JSON.stringify(this.student));

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
