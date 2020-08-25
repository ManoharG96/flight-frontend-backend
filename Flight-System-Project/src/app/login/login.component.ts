import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { ErrorsInfo } from '../classes/errors-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userHttp: UserService, private route: Router) { }

  userInfo: User;
  userFromDb: any;
  errors = new ErrorsInfo(); 
  errorBoolean: boolean = false;
  sendingStatus: boolean = false;
  
  ngOnInit() {
    this.errors = new ErrorsInfo();
  }

  loginData(data) {
    this.userInfo = data.value;
    this.userHttp.login(this.userInfo).subscribe(info => {
      this.userFromDb = info;
      this.settingSession(this.userFromDb);
      this.routerHome();
      this.errorBoolean = false;
      console.log(this.userFromDb);
      console.log(sessionStorage.getItem('userData'));
    }, err => {
      this.errors = err.error;
      this.errorBoolean = true;
      console.log(this.errors);
    });
  }
  settingSession(data) {
    if (data === null) {
      console.log(data);
      console.log("no data found")
    } else {
      sessionStorage.setItem('userData', JSON.stringify(data));
    }
  }

  routerHome() {
    this.route.navigate(['home']);
  }

  navigateToForgotPassword(){
    this.route.navigate(['check-mailid'])
  }

  navigateToRegister() {
    this.route.navigate(['register']);
  }

}
