import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:8000/user'

  userInfo: User;

  constructor(private http: HttpClient) { }

  register(data) {
    this.userInfo = data;
    return this.http.post(this.baseUrl + '/register', this.userInfo);
  }

  login(data) {
    this.userInfo = data;
    return this.http.get(this.baseUrl + '/login?emailId=' + this.userInfo.emailId +
      '&password=' + this.userInfo.password);
  }

  edit(data) {
    this.userInfo = data;
    return this.http.put(this.baseUrl + '/edit', this.userInfo);
  }
  sendToken(data) {
    this.userInfo = data;
    return this.http.post(this.baseUrl + '/sendtoken', this.userInfo);
  }

  changePassword(data) {
    this.userInfo = data;
    return this.http.post(this.baseUrl + '/resetpassword', data);
  }

  forgotPassword(data) {
    this.userInfo = data
    return this.http.get(this.baseUrl + '/emailid?emailId=' + this.userInfo.emailId);
  }
}
