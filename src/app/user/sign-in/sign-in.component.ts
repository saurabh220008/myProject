import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formsubmit!: boolean;

  constructor(private fb: FormBuilder) { }

  signInForm: any;
  alphaNumeric="/^[a-zA-Z0-9]+$/";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  contactPattern ="^((\\+91-?)|0)?[0-9]{10}$";

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.alphaNumeric)]],
      email: ['', [ Validators.required, Validators.pattern(this.emailPattern)]],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10), Validators.minLength(10)]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
   
    console.log(this.signInForm.controls)
  }
  // private formsubmit : boolean;
  onSubmit(form: FormGroup) {

    debugger;
    this.formsubmit = true;
    if(this.signInForm.valid){
      console.log(JSON.stringify(form.value))
    }
  }

  get f()
  {
  
    return this.signInForm.controls;
  }
}
