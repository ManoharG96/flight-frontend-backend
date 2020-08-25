import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../classes/flight';
import { DatePipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  baseUrl: string = 'http://localhost:8000/flight'

  flight: Flight;
  dateConversion: string;

  constructor(private flightHttp: HttpClient, private datePipe: DatePipe) { }

  getFlights(data) {
    this.flight = data;
    this.dateConversion = stringify((this.datePipe.transform(this.flight.departureDate, 'dd-MMM-yyyy')).toUpperCase());
    return this.flightHttp.get(this.baseUrl + '/search?fromLocation=' + this.flight.fromLocation + '&toLocation='
      + this.flight.toLocation + '&departureDate=' + this.dateConversion);
  }

}
