import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  formsubmit!: boolean;
  insertForm: any;
  tab!: number;
  id: any;
  student: any;
  arr: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  alphaNumeric = "/^[a-zA-Z0-9]+$/";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  contactPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
    debugger
    let data = JSON.stringify(localStorage.getItem("student"));
    var data1 = JSON.parse(data);
    this.student = JSON.parse(data1);

    this.id = <any>this.route.snapshot.paramMap.get("sid");
    // // console.log(id);
    // console.log(this.student[this.id].name)
    // this.id

    if (this.id == -1) {
      this.insertForm = this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.pattern(this.emailPattern)],
        contact: ['', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10), Validators.minLength(10)]],
        address: ['', Validators.required]

      })
    } else {

      this.insertForm = this.fb.group({
        name: [this.student[this.id].name, Validators.pattern(this.alphaNumeric)],
        lastName: [this.student[this.id].lastName, Validators.pattern(this.alphaNumeric)],
        email: [this.student[this.id].email, Validators.pattern(this.emailPattern)],
        contact: [this.student[this.id].contact, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10), Validators.minLength(10)]],
        address: [this.student[this.id].address, Validators.pattern(this.alphaNumeric)]
      })
    }

  }

  onSubmit(form: FormGroup) {
    debugger;
    this.formsubmit = true;

    if (this.id == -1) {

      if (this.insertForm.valid) {
        const myForm = form.value;
        const studentJSON = localStorage.getItem('student');
        let student: any[] = studentJSON ? JSON.parse(studentJSON) : [];
        student.push(myForm)
        localStorage.setItem('student', JSON.stringify(student));
        console.log(localStorage.getItem('student'));
        this.insertForm.reset();
        Swal.fire({
          title: 'Record addded successfully  :-)',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
       // window.location.href("/curd/operation")
       
       this.router.navigateByUrl('/curd/operation');

      }
    } else {
      const myForm = form.value;

      this.update();
    }
  }


  get f() {
    return this.insertForm.controls;
  }


  update() {
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
      confirmButtonText: 'Yes, update it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Updated!',
          'Your record is successfully updated.',
          'success'
        )

        //update code
        const studentJSON = localStorage.getItem('student');
        const data1 = JSON.parse(JSON.stringify(studentJSON));
        this.arr = JSON.parse(data1);
        console.log(this.arr[this.id])
        this.arr[this.id].name = this.insertForm.get("name").value;
        this.arr[this.id].lastName = this.insertForm.get("lastName").value;
        this.arr[this.id].email = this.insertForm.get("email").value;
        this.arr[this.id].contact = this.insertForm.get("contact").value;
        this.arr[this.id].address = this.insertForm.get("address").value;
        console.log(this.arr);
        localStorage.removeItem('student');
        localStorage.setItem('student', JSON.stringify(this.arr));
        this.router.navigateByUrl('/curd/operation');

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          // 'Your record is safe :)',
          'error'
        )
      }
    })
  }


}


