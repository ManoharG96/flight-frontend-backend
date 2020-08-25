import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../service/user.service';
import { ErrorsInfo } from '../classes/errors-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordMatching: string;
  passwordBoolean: boolean = false;
  userInfo =  new User();
  success: boolean = false;
  error = new ErrorsInfo();
  errorBoolean: boolean = false;

  constructor(private userHttp: UserService) { }

  ngOnInit() {
    this.error = new ErrorsInfo();
    this.userInfo = new User();
    sessionStorage.removeItem('flightDetails');
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('selectedFlight');
    sessionStorage.removeItem('selectedBooking');
    sessionStorage.removeItem('bookedDetails');
  }

  registerData(form) {
    if (form.value.confirmPassword === form.value.password) {
      this.userInfo = form.value;
      this.passwordBoolean = true;
      this.errorBoolean = false;
      this.userHttp.register(this.userInfo).subscribe((data) => {
        console.log(data);
      }, (err) => {
        console.log(err);
        this.error = err.error;
        console.log(err.error);
        this.errorBoolean = true;
      }, () => {
        this.success = true;
      });
    } else {
      this.passwordBoolean = false;
      this.success = false;
      this.errorBoolean = false;
      this.passwordMatching = "*Confirm Password & Password not matching";
    }
  }
}
