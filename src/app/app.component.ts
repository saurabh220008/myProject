import { Component } from '@angular/core';
import {  } from './account/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  x: any;

  ngOnInit() {
    debugger;
    this.x = localStorage.getItem('user');
  }
}
