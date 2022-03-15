import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-step-log-in',
  templateUrl: './step-log-in.component.html',
  styleUrls: ['./step-log-in.component.css']
})
export class StepLogInComponent implements OnInit {
  formsubmit!: boolean;
  stepForm!: any;
  stepForm1!: FormGroup;
  
   firsTab!:FormGroup;
   second!:FormGroup;
  tab: number = 1;
  constructor(private fb: FormBuilder) {  }

  currentTab = 0;
  // Display the current tab

  alphaNumeric = "/^[a-zA-Z0-9]+$/";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  contactPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
    this.stepForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10), Validators.minLength(10)]],
    });

    
    this.stepForm1 = this.fb.group([
      this.firsTab = this.fb.group({
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],

      }),
      this.second = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10), Validators.minLength(10)]],


      })


    ]) 
  }

  onSubmit(form: FormGroup) {

    debugger;
    this.formsubmit = true;
    if (this.stepForm.valid) {
      console.log(JSON.stringify(form.value))
    }
  }

  get f() {
    return this.stepForm.controls;
  }
  next() {
    debugger;
    if (this.tab == 1) {
      if(this.stepForm.get("name").valid && this.stepForm.get("lastName").valid)
      { 
        this.tab++;
      }
    }
    if (this.tab == 2) {
      //this.tab++;
    }
    if (this.tab == 3) {
      //this;
    }
  }
  prev() {
    if (this.tab != 1) {
      this.tab--;
    }

  }

}
