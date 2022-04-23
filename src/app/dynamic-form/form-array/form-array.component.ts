import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  formArray: any;
  formsubmit!: boolean;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  members: any;

  constructor(public fb: FormBuilder) { }


  ngOnInit() {

    this.formArray = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      contact: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10), Validators.minLength(10)]],
      members: this.fb.array([])
    });
    
  }


  onSubmit() {
    debugger;
    const ab = this.formArray.get('members') as FormArray
    this.formsubmit = true
    if (this.formArray.valid) 
   
     
        alert(JSON.stringify(this.formArray.value))
      
    
    }
  

  get f() {
    return this.formArray.controls;
  }

  /*############### Add Dynamic Elements ###############*/
  get addDynamicElement() {
    return this.formArray.get('members').controls;
  }

  valid(i: any) {
    debugger;
    const ab = this.formArray.get('members') as FormArray
   
    return ab.value[i].mem
  }

  addItems() {
    const ab = this.formArray.get('members') as FormArray
    ab.push(
      this.fb.group({
        mem:["",[Validators.required]]
      })
    )
  }

  deleteItems(i: number) {
    const del = this.formArray.get('members') as FormArray
    del.removeAt(i);

  }



}
