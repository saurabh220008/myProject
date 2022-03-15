import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getAllEmployee(){
    return this.http.get<any>("http://localhost:54818/api/Login/AllEmployeeDetails");
  }
}
