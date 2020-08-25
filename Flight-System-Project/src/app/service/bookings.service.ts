import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookings } from '../classes/bookings';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  baseUrl: string = 'http://localhost:8000/booking'

  constructor(private bookingHttp: HttpClient) { }

  getBookings(userId) {
    return this.bookingHttp.get(this.baseUrl + '/getbooking?userId=' + userId);
  }

  confirmBooking(bookings:Bookings) {
    return this.bookingHttp.put(this.baseUrl + '/addbooking', bookings);
  }
}
