import { Component, OnInit } from '@angular/core';

import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private service: EmployeeServiceService) { }

  ngOnInit() {
    this.getAllEmp();
  }
  employeedata: any;
  eid!: number;
  getAllEmp() {
    this.service.getAllEmployee().subscribe(data => {
      console.log(JSON.stringify(data));
      this.employeedata = data;
    });
  }

  view(id: number) {
   this.eid = id;
  console.log(this.eid)
  }


}
