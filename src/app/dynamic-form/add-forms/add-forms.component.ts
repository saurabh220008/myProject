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
  formsubmit: boolean;

  constructor(private fb: FormBuilder) { }
  dynamicArray: Array<table> = [];
  customer: any;
  newDynamic: any = {};

  ngOnInit(): void {

    this.addForm = this.fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      dob: ["", Validators.required],
      vehicle: ["", Validators.required],
      contact: ["", Validators.required],
      vName: ["", Validators.required],
      vNumber: ["", Validators.required],
      vModel: ["", Validators.required],
      NOW: ["", Validators.required]
    })

  }

  onSubmit(form: FormGroup) {
    debugger;
    this.formsubmit = true;
    if (this.addForm.valid) {
      console.log(JSON.stringify(form.value));
      var customers:[] =[];
      // customer
      // const customerJSON = localStorage.getItem('customer');
      // const customer: any[] = customerJSON ? JSON.parse(customerJSON) : [];
      // customer.push(this.addForm.get("name").value);
      // customer.push(this.addForm.get("lastname").value);
      // customer.push(this.addForm.get("dob").value);
      // customer.push(this.addForm.get("vehicle").value);
      // customer.push(this.addForm.get("contact").value);
      // this.Vehicle = this.dynamicArray;
      // customer.push(this.Vehicle);
      // customers.push(customer)
      // console.log(customer);
      // const data1 = JSON.parse(JSON.stringify(customerJSON));

      this.customer={
        "name":this.addForm.get("name").value,
        "lastname":this.addForm.get("lastname").value,
        "dob":this.addForm.get("dob").value,
        "vehicle":this.dynamicArray,
        "contact":this.addForm.get("contact").value
      }

      console.log(this.customer);
      localStorage.setItem("customer", JSON.stringify(this.customer));

    }
  }

  onKeyDownEvent(event: any) {
    debugger;
    this.NOV = event.target.value
    console.log(event.target.value);

  }

  addRow(n: number) {
    debugger;
    if (n <= this.NOV) {
      while (n != 0) {
        // for (n=0; n < this.NOV; n++) {
        this.newDynamic = { vName: "", vNumber: "", vModel: "", NOW: "" };
        this.dynamicArray.push(this.newDynamic);
        console.log(this.dynamicArray);
        // }
        n--;
        this.NOV--;
      }
      this.NOV--;
    }
    // return true;
  }

  deleteRow(n: number) {
    debugger;
    if (this.dynamicArray.length == 1) {
      return false;
    } else {
      this.dynamicArray.splice(n, 1);
      return true;
    }
  }

}
