import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { table } from '../table.model';

@Component({
  selector: 'app-add-forms',
  templateUrl: './add-forms.component.html',
  styleUrls: ['./add-forms.component.css']
})
export class AddFormsComponent implements OnInit {
  addForm: any;
  NOV: any;

  constructor(private fb: FormBuilder) { }
  dynamicArray: Array<table> = [];
  newDynamic: any = {};

  ngOnInit(): void {

    // this.newDynamic = { vName: "", vNumber: "", vModel: "", NOW: "" };
    // this.dynamicArray.push(this.newDynamic);

    this.addForm = this.fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      dob: ["", Validators.required],
      vehicle: ["", Validators.required],
      contact: ["", Validators.required]
    })

  }

  onSubmit(form: FormGroup) {

  }

  onKeyDownEvent(event: any) {
    debugger;
    this.NOV = event.target.value
    console.log(event.target.value);

  }

  addRow(n: number) {
    debugger;
    if (n == this.NOV) {
      for (n = 1; n >= n; n--) {
        this.newDynamic = { vName: "", vNumber: "", vModel: "", NOW: "" };
        this.dynamicArray.push(this.newDynamic);
        console.log(this.dynamicArray);
      }
    }
    return true;
  }

}
