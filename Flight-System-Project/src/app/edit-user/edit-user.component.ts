import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../service/user.service';
import { ErrorsInfo } from '../classes/errors-info';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route: Router, private userService: UserService) { }

  user: User;
  errors = new ErrorsInfo();
  errorBoolean: boolean = false;
  success: boolean = false;
  
  ngOnInit() {
    this.user = new User();
    this.errors = new ErrorsInfo();
    this.errors = new ErrorsInfo();
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
    } else {
      this.route.navigate(['/login']);
    }
  }

  updateUser(form) {
    console.log(form.value);
    this.userService.edit(form.value).subscribe(data => {
      console.log(data);
      this.success = true;
      sessionStorage.setItem('userData',JSON.stringify(data));
      this.errorBoolean = false;
    }, err => {
      console.log(err);
      this.errors = err.error;
      this.errorBoolean = true;
      this.success = false;
    })
  }

}
