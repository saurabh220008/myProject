import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  btn: any = false;
  signout() {
    localStorage.removeItem("user")
  }

  ngOnInit() {
    debugger;
    var x = localStorage.getItem('user');
    if (x == null) {
      // this.btn = {
      //   "display": "none"
      // };
      this.btn = false;
    }
    else if(x == "1") {
      this.btn = true
      // this.btn = {
      //   "display": "inline"
      // };
    }
  }

}
