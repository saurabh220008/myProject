import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const data = localStorage.getItem("student")
     JSON.parse(JSON.stringify(data));
  

    const id = this.route.snapshot.paramMap.get("sid");
    console.log(id);
    this.id
    if (id == null) {
      this.insertForm = this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        contact: ['', Validators.required],
        address: ['', Validators.required]
      })
    } else {

      const getdatastring = localStorage.getItem('stuent');
      let data = JSON.parse(this.getdatastring)

      this.insertForm = this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        contact: ['', Validators.required],
        address: ['', Validators.required]
      })
    }

  }

  onSubmit(form: FormGroup) {
    debugger
    // console.log(this.key)
    // this.insertForm.id = this.key;

    const myForm = form.value;
    const studentJSON = localStorage.getItem('student');
    let student: any[] = studentJSON ? JSON.parse(studentJSON) : [];
    student.push(myForm)
    localStorage.setItem('student', JSON.stringify(student));
    console.log(localStorage.getItem('student'));
  }

  get f() {
    return this.insertForm.controls;
  }


}

// const patientObj =  patient
//     
// const usersJSON = localStorage.getItem('patient');
// let users: any[] = usersJSON ? JSON.parse(usersJSON) : [];
//       users.push( patientObj);
//             localStorage.setItem('patient', JSON.stringify(users))



//    // debugger;
//    this.users = localStorage.getItem('userinfo');
//    this.users = JSON.parse(this.users);
//  }

//  onSubmit() {
//    // debugger;
//    const userObj = this.Login.value
//    this.users = this.users ? JSON.parse(this.users) : [];
//    this.users.push(userObj);
//    localStorage.setItem('userinfo', JSON.stringify(this.users))
//    this.GetData();
//    this.Login.reset();
//  }

//  GetData() {
//    debugger;
//    this.users = localStorage.getItem('userinfo');
//    this.users = JSON.parse(this.users);
//  }


    // this.formsubmit = true;
    // if (this.insertForm.valid) {
    // console.log(JSON.stringify(form.value))
    // this.store(this.insertForm.get("id"), this.insertForm.get("name"), this.insertForm.get("lastName"), this.insertForm.get("email"),
    //   this.insertForm.get("contact"), this.insertForm.get("address"))
    // }

  // store(id: any, name: any, lastName: any, email: any, contact: any, address: any) {
  //   var student = localStorage.getItem('student')
  //   if (student == null) {

  //     const students = [];

  //     const data = {
  //       id: id,
  //       name: name,
  //       lastName: lastName,
  //       email: email,
  //       contact: contact,
  //       address: address
  //     }
  //     students.push(data)
  //     localStorage.setItem('student', JSON.stringify(students))
  //     // console.log( 'data'+localStorage.getItem('student'))
  //   } else {
  //     const nstudent = JSON.parse(student)
  //     const data = {
  //       id: id,
  //       name: name,
  //       lastName: lastName,
  //       email: email,
  //       contact: contact,
  //       address: address
  //     }

  //     nstudent.push(data)
  //     localStorage.setItem('student', JSON.stringify(nstudent))
  //     // console.log(localStorage.getItem('student'))
  //   }
  // }
