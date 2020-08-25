import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';
import { Flight } from '../classes/flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  user: User;
  flights: Flight;
  flightId: number;


  constructor(private route: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      if (sessionStorage.getItem('flightDetails') !== null) {
        this.flights = JSON.parse(sessionStorage.getItem('flightDetails'));
      } else {
        this.route.navigate(['/flight']);
      }
    } else {
      this.route.navigate(['/login']);
    }
  }

  flightSearchDetails(flight) {
    if (flight !== null) {
      this.navigateToBookings();
      sessionStorage.setItem('selectedFlight', JSON.stringify(flight));
      console.log(JSON.parse(sessionStorage.getItem('selectedFlight')));
    } else {
      console.log("Flight is not selected");
    }
  }

  navigateToBookings() {
    this.route.navigate(['add-passenger']);
  }
}
