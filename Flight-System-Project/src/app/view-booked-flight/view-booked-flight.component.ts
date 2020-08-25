import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { Bookings } from '../classes/bookings';
import { Flight } from '../classes/flight';
import { ErrorsInfo } from '../classes/errors-info';

@Component({
  selector: 'app-view-booked-flight',
  templateUrl: './view-booked-flight.component.html',
  styleUrls: ['./view-booked-flight.component.css']
})
export class ViewBookedFlightComponent implements OnInit {

  user: User;
  bookedDetails: Bookings;
  flightDetails: Flight;

  constructor(private route: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      console.log(this.user);
      if (sessionStorage.getItem('bookedDetails') !== null) {
        this.bookedDetails = JSON.parse(sessionStorage.getItem('selectedBooking'));
        console.log(this.bookedDetails);
      } else {
        this.route.navigate(['flight']);
      }
    } else {
      console.log("login first")
      this.route.navigate(['/login']);
    }
  }

}
