import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getAllEmployee() {
    return this.http.get<any>("http://localhost:54818/api/Login/AllEmployeeDetails");
  }

  getSingleEmp(eid: number) {
    return this.http.get<any>("http://localhost:54818/api/Login/GetEmployeeDetailsById?employeeid=" + eid)
  }

  postEmpDetails(emp: any) {
    return this.http.post<any>("http://localhost:54818/api/Login/InsertEmployeeDetails", emp)
  }

  deleteEmployee(emp: number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:54818/api/Login/DeleteEmployee?id=" + emp,headers)
  }
}
