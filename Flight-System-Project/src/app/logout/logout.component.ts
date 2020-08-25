import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ''

})
export class LogoutComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    sessionStorage.removeItem('flightDetails');
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('selectedFlight');
    sessionStorage.removeItem('selectedBooking');
    sessionStorage.removeItem('bookedDetails');
    this.route.navigate(['login']);
  }

}
