import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateServiceService } from 'src/app/services/state-service.service';
import { district } from '../district.model';
import { state } from '../state.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formsubmit!: boolean;
  // selectedStatey: Country = new Country(2, 'Brazil');
  states:state[];
  districts:district[];

  constructor(private fb: FormBuilder, private service : StateServiceService) { }

  signInForm: any;
  alphaNumeric = "/^[a-zA-Z0-9]+$/";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  // contactPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  male: any;
  female: any;
  other: any;

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      contact: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.minLength(10)]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      Mname: ['', [Validators.required]],
      Fname: ['', [Validators.required]],
      Other: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]]
    });

    this.male = {
      "display": "none"
    };
    this.female = {
      "display": "none"
    };
    this.other = {
      "display": "none"
    };

    console.log(this.signInForm.controls)

    this.states = this.service.getStates();

  }
  // private formsubmit : boolean;
  onSubmit(form: FormGroup) {

    debugger;
    this.formsubmit = true;
    if (this.signInForm.valid) {
      console.log(JSON.stringify(form.value))
    }
  }

  get f() {

    return this.signInForm.controls;
  }

  selectgen(event: any) {
    debugger
    var x: boolean = false;
    if (event.target.value == "Male") {
      this.male = {
        "display": "inline"
      };
      this.female = {
        "display": "none"
      };
      this.other = {
        "display": "none"
      };
    }
    else if (event.target.value == "Female") {
      this.female = {
        "display": "inline"
      };
      this.male = {
        "display": "none"
      };
      this.other = {
        "display": "none"
      };
    }
    else if (event.target.value == "Other") {
      this.other = {
        "display": "inline"
      };
      this.female = {
        "display": "none"
      };
      this.male = {
        "display": "none"
      };
    }
    else{
      this.other = {
        "display": "none"
      };
      this.female = {
        "display": "none"
      };
      this.male = {
        "display": "none"
      };
    }
  }

  onSelect(e : any) {
    var event = e.target.value;
    this.districts = this.service.getDistricts().filter((item) => item.stateid == event);
  }

  // _keyUp(event: any) {
  //   debugger
  //   const pattern = /[0-9\+\-\ ]/;
  //   let inputChar = String.fromCharCode(event.key);

  //   if (!pattern.test(inputChar)) {
  //     // invalid character, prevent input
  //     event.preventDefault();
  //   }
  // }


}
