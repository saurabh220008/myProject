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
  ncust: any[]
  customerlist: any;

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
      this.customerlist = localStorage.getItem('customer');
      // let customer: any[] = customerlist ? JSON.parse(customerlist) : [];
      // customer.push(
      //   {
      //     "name": this.addForm.get("name").value,
      //     "lastname": this.addForm.get("lastname").value,
      //     "dob": this.addForm.get("dob").value,
      //     "vehicle": this.dynamicArray,
      //     "contact": this.addForm.get("contact").value
      //   }
      // )
      // localStorage.setItem('customer', JSON.stringify(customer));
      // console.log(localStorage.getItem('customer'));
      // for (var i = 0; i < this.customerlist.length; i++) {
        if (this.customerlist == null) {
          debugger
          let customers: any = [];
          this.customer = {
            "name": this.addForm.get("name").value,
            "lastname": this.addForm.get("lastname").value,
            "dob": this.addForm.get("dob").value,
            "vehicle": this.dynamicArray,
            "contact": this.addForm.get("contact").value
          }
          customers.push(this.customer);
          localStorage.setItem("customer", JSON.stringify(JSON.parse(customers)));
          console.log(customers);
          alert("add");
        } else {
          this.ncust = JSON.parse(this.customerlist);
          console.log(this.ncust);
          this.customer = {
            "name": this.addForm.get("name").value,
            "lastname": this.addForm.get("lastname").value,
            "dob": this.addForm.get("dob").value,
            "vehicle": this.dynamicArray,
            "contact": this.addForm.get("contact").value
          }
          this.ncust.push(this.customer);
          localStorage.setItem("customer", JSON.stringify(this.ncust));
          console.log(this.ncust);
          alert("update")
        }

      // }
    }
  }

  onKeyDownEvent(event: any) {
    debugger;
    this.NOV = event.target.value
    console.log(event.target.value);

  }

  addRow(n: number) {
    // debugger;
    // if (n <= this.NOV) {
    //   while (n != 0) {
    //     // for (n=0; n < this.NOV; n++) {
    //     this.newDynamic = { vName: "", vNumber: "", vModel: "", NOW: "" };
    //     this.dynamicArray.push(this.newDynamic);
    //     console.log(this.dynamicArray);
    //     // }
    //     n--;
    //     this.NOV--;
    //   }
    //   this.NOV--;
    // }
    // return true;
    if (this.NOV > 0) {
      this.newDynamic = { vName: "", vNumber: "", vModel: "", NOW: "" };
      this.dynamicArray.push(this.newDynamic);
      this.NOV--;
    }
  }

  deleteRow(n: number) {
    debugger;
    // if (this.dynamicArray.length == 1) {
    //   return false;
    // } else {
    //   this.dynamicArray.splice(n, 1);
    //   return true;
    // }
    if (this.NOV >= 0) {
      this.dynamicArray.splice(n, 1);
      this.NOV++
    }
  }

}
