import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { BookingsService } from '../service/bookings.service';
import { Bookings } from '../classes/bookings';
import { Passengers } from '../classes/passengers';
import { ErrorsInfo } from '../classes/errors-info';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  user: User;
  bookings: Bookings;
  selectedBooking: Bookings;
  bookedPassenger: Passengers[];
  errors = new ErrorsInfo();
  errorBoolean: boolean = false;


  constructor(private route: Router, private bookingService: BookingsService) { }

  ngOnInit() {
    this.errors = new ErrorsInfo();
    this.user = new User();
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      console.log(this.user);
      this.viewBookings(this.user.userId);
      this.bookings = JSON.parse(sessionStorage.getItem('bookedDetails'));
      console.log(this.bookings);
      console.log(sessionStorage.getItem('selectedBooking'));
    } else {
      console.log("login first")
      this.route.navigate(['/login']);
    }
  }

  viewBookings(userId) {
    userId = this.user.userId;
    this.bookingService.getBookings(userId).subscribe(data => {
      sessionStorage.setItem('bookedDetails', JSON.stringify(data));
      this.errorBoolean = false;
    }, err => {
      console.log(err);
      this.errors = err.error;
      this.errorBoolean = true;
    })
  }

  flightDetails(booking) {
    this.selectedBooking = booking;
    sessionStorage.setItem('selectedBooking', JSON.stringify(this.selectedBooking));
    this.route.navigate(['booked-flights']);
  }

  passengersDetails(booking) {
    this.bookedPassenger = booking.passengerDetails;
    console.log(this.bookedPassenger);
    sessionStorage.setItem('bookedPassenger', JSON.stringify(this.bookedPassenger));
    this.route.navigate(['booked-passenger']);
  }

}
