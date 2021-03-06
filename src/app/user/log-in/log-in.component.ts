import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formsubmit!: boolean;

  constructor(private fb: FormBuilder,  private router: Router) { }

  logInForm: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  ngOnInit(): void {


    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(form: FormGroup) {

    debugger;
    this.formsubmit = true;
    if (this.logInForm.valid) {
      // console.log(JSON.stringify(form.value))

      console.log(this.logInForm.get('email').value)
      console.log(this.logInForm.get('password').value)
      if(this.logInForm.get('email').value == "abc@gmail.com" && this.logInForm.get('password').value == "test@123")
      {
        localStorage.setItem('user','1');
        this.router.navigateByUrl('/curd/operation');
      }
      else{
        alert('login failed');
      }


    }
  }
  
  get f() {

    return this.logInForm.controls;
  }

}


