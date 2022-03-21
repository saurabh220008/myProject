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

      this.router.navigateByUrl('/user/viewSingleEmp?eid='+this.eid);
 
  }

  delete(id:number){
    debugger;

    this.service.deleteEmployee(id).subscribe(data => {
      console.log("----------------------------------------")
      console.log(data);

    });

  }



}
