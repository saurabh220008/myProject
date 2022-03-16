import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-view-single-emp',
  templateUrl: './view-single-emp.component.html',
  styleUrls: ['./view-single-emp.component.css']
})
export class ViewSingleEmpComponent implements OnInit {
  id: any;
  singleEmployeedata: any;

  constructor(private route: ActivatedRoute, private service: EmployeeServiceService) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.id = params['eid'];
        // console.log(this.singleEmployeedata); 
      }
      );

      this.service.getSingleEmp(this.id).subscribe(data => {
          console.log(JSON.stringify(data));
          console.log("----------------------------------------")
          console.log(data);
          this.singleEmployeedata = null;
          this.singleEmployeedata = JSON.parse(data);    
           console.log(this.singleEmployeedata+"data");

        });
  }

}
