import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { Flight } from '../classes/flight';
import { FlightService } from '../service/flight.service';
import { ErrorsInfo } from '../classes/errors-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private flightHttp: FlightService) { }

  user = new User();
  flight = new Flight();
  dateConversion: any;
  dateString: string;
  errorBoolean: boolean = false;
  errors = new ErrorsInfo();

  ngOnInit() {
    this.user = new User();
    this.errors = new ErrorsInfo();
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      console.log(this.user);
    } else {
      console.log("login first")
      this.route.navigate(['/login']);
    }
  }

  searchDate(form) {
    this.flightHttp.getFlights(form.value).subscribe(data => {
      if (data !== null) {
        console.log(data);
        this.errorBoolean = false;
        this.settingFlightDetails(data);
        this.routerToFlight();
        console.log(sessionStorage.getItem('flightDetails'));
      }
    }, err => {
      console.log(err);
      this.errors = err.error;
      this.errorBoolean = true;
    });
  }

  settingFlightDetails(data) {
    sessionStorage.setItem('flightDetails', JSON.stringify(data));
  }

  routerToFlight() {
    this.route.navigate(['flight']);
  }


}
