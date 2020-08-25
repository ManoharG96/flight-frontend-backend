import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../classes/user';
import { ErrorsInfo } from '../classes/errors-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user: User;
  errors: ErrorsInfo;
  passwordBoolean: boolean = false;
  sendTokenSuccess: boolean = false;
  errorBoolean: boolean = false;
  success: boolean = false;
  passwordMatching: string;
  userInfo: User;

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.user = new User();
    this.errors = new ErrorsInfo();
    if (sessionStorage.getItem('userFromDb') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userFromDb'));
    } else {
      this.route.navigate(['check-mailid']);
    }
  }
  changePassword(form) {
    if (form.value.confirmPassword === form.value.password) {
      this.userInfo = form.value;
      this.passwordBoolean = true;
      this.errorBoolean = false;
      this.success = true;
      this.userService.changePassword(this.userInfo).subscribe(data => {
        console.log(data);
        this.errorBoolean = false;
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
