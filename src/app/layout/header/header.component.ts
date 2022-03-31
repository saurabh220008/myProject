import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  btn: any;
  msg: any = false;
  signout() {
    localStorage.removeItem("user")
  }

  ngOnInit() {
    debugger;
    var x = localStorage.getItem('user');
    if (x == "1") {
      this.btn = {
        "display": "none"
      };
      this.msg = true;

      // this.btn = false;
    }

  }

}
