import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { Passengers } from '../classes/passengers';
import { Flight } from '../classes/flight';
import { Router } from '@angular/router';
import { Bookings } from '../classes/bookings';
import { BookingsService } from '../service/bookings.service';

@Component({
  selector: 'app-confirm-bookings',
  templateUrl: './confirm-bookings.component.html',
  styleUrls: ['./confirm-bookings.component.css']
})
export class ConfirmBookingsComponent implements OnInit {

  user: User;
  passengerList: Passengers[];
  selectedFlight: Flight;
  totalPrice: number;
  confirmBooking = new Bookings;
  dataFromDb: Bookings;
  displayFlight: Flight;
  success: boolean = false;

  constructor(private route: Router, private bookingService: BookingsService) { }

  ngOnInit() {
    this.dataFromDb = new Bookings();
    this.displayFlight = new Flight();
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      console.log(this.user);
      this.selectedFlight = JSON.parse(sessionStorage.getItem('selectedFlight'));
      this.passengerList = JSON.parse(sessionStorage.getItem('passengersList'));
      this.totalPrice = this.totalCost(this.selectedFlight.price, this.passengerList.length);
    } else {
      console.log("login first")
      this.route.navigate(['/login']);
    }
  }

  confirmBookings() {
    this.confirmBooking.flightDetails = this.selectedFlight;
    this.confirmBooking.passengerDetails = this.passengerList;
    this.confirmBooking.userId = this.user.userId;
    this.confirmBooking.bookingPrice = this.totalPrice;
    this.bookingService.confirmBooking(this.confirmBooking).subscribe(data => {
      sessionStorage.setItem('bookedDetails', JSON.stringify(data));
      this.dataFromDb = JSON.parse(sessionStorage.getItem('bookedDetails'));
      if (this.dataFromDb !== null) {
        console.log(this.dataFromDb);
        this.displayFlight = this.dataFromDb.flightDetails;
        console.log(this.displayFlight);
        this.success = true;
      } else {
        this.success = false;
      }
    });
  }

  totalCost(price, noOfPassenger) {
    return price * noOfPassenger;
  }
}
