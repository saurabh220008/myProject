import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  btn: any;
  signout() {
    localStorage.removeItem("user")
  }

  ngOnInit() {
    var x = localStorage.getItem('user');
    if (x === null) {
      this.btn = {
        "display": "none"
      };
    }
  }

}
