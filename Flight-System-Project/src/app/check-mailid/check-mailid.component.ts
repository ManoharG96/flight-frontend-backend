import { Component, OnInit } from '@angular/core';
import { ErrorsInfo } from '../classes/errors-info';
import { User } from '../classes/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-mailid',
  templateUrl: './check-mailid.component.html',
  styleUrls: ['./check-mailid.component.css']
})
export class CheckMailidComponent implements OnInit {

  emailId: string;
  user: User;
  success: boolean = false;
  errors: ErrorsInfo;
  errorBoolean: boolean = false;
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    this.user = new User();
    this.errors = new ErrorsInfo();
  }

  forgotPassword(form) {
    this.emailId = form.value;
    console.log(this.emailId);
    this.userService.forgotPassword(this.emailId).subscribe(data => {
      console.log(data);
      sessionStorage.setItem('userFromDb', JSON.stringify(data));
      this.errorBoolean = false;
      this.route.navigate(['forgot-password']);
    }, err => {
      console.log(err.error);
      this.errors = err.error;
      this.errorBoolean = true;
    })
  }
}
