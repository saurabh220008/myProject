import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  // singleEmployeedata: any;  

  constructor(private service: EmployeeServiceService, private router: Router) { }

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
    // this.service.getAllEmployee().subscribe(data => {
    //   console.log(JSON.stringify(data));
    //   this.employeedata = data;
    // });
    // this.service.getSingleEmp(this.eid).subscribe(data => {
    //   console.log(JSON.stringify(data));
    //   this.singleEmployeedata = data;
      this.router.navigateByUrl('/user/viewSingleEmp?eid='+this.eid);
    //   this.singledata.emit(this.singleEmployeedata); 
      

    // });
  }



}
