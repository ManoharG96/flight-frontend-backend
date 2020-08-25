import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { Bookings } from '../classes/bookings';
import { Flight } from '../classes/flight';
import { Passengers } from '../classes/passengers';

@Component({
  selector: 'app-view-passenger',
  templateUrl: './view-passenger.component.html',
  styleUrls: ['./view-passenger.component.css']
})
export class ViewPassengerComponent implements OnInit {

  constructor(private route: Router) { }

  user: User;
  bookedPassenger: Passengers[];

  ngOnInit() {
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      console.log(this.user);
      if (sessionStorage.getItem('bookedDetails') !== null) {
        this.bookedPassenger = JSON.parse(sessionStorage.getItem('bookedPassenger'));
        console.log(this.bookedPassenger);
      } else {
        this.route.navigate(['flight']);
      }
    } else {
      console.log("login first")
      this.route.navigate(['/login']);
    }
  }

}
