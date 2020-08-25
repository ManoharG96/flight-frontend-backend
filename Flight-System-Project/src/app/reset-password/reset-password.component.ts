import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { ErrorsInfo } from '../classes/errors-info';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user: User;
  errors: ErrorsInfo;
  passwordBoolean: boolean = false;
  sendTokenSuccess: boolean = false;
  errorBoolean: boolean = false;
  success: boolean = false;
  passwordMatching: string;
  userInfo: User;

  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
    this.errors = new ErrorsInfo();
    this.user = new User();
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      console.log(this.user);
      this.sendToken(this.user);
      this.sendTokenSuccess = true;
    } else {
      this.sendTokenSuccess = false;
      console.log("login first")
      this.route.navigate(['/login']);
    }
  }

  sendToken(data) {
    this.userService.sendToken(data).subscribe(data => {
      console.log(data);
      this.errorBoolean = false;
    }, err => {
      console.log(err.value);
      this.errors = err.error;
      console.log(this.errors);
      this.errorBoolean = true;
    });
  }
  changePassword(form) {
    if (form.value.confirmPassword === form.value.password) {
      this.userInfo = form.value;
      this.passwordBoolean = true;
      this.errorBoolean = false;
      this.userService.changePassword(this.userInfo).subscribe(data => {
        console.log(data);
        this.errorBoolean = false;
        this.success = true;
        sessionStorage.removeItem('userData');
      }, err => {
        console.log(err.error);
        this.errorBoolean = true;
        this.errors = err.error;
        this.success = false;
      })
    } else {
      this.passwordBoolean = false;
      this.success = false;
      this.errorBoolean = false;
      this.passwordMatching = "*Confirm Password & Password not matching";
    }
  }
}
