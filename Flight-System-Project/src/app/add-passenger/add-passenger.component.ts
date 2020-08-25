import { Component, OnInit } from '@angular/core';
import { Passengers } from '../classes/passengers';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { Flight } from '../classes/flight';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {


  constructor(private route: Router) { }

  user: User;
  selectedFlight: Flight;
  passenger = new Passengers();
  passengerArray = [];
  ageInvalid: string;
  ageBoolean: boolean = false;


  ngOnInit() {
    if (sessionStorage.getItem('userData') !== null) {
      this.user = JSON.parse(sessionStorage.getItem('userData'));
      console.log(this.user);
      this.passenger = new Passengers();
      this.passengerArray.push(this.passenger);
      this.selectedFlight = JSON.parse(sessionStorage.getItem('selectedFlight'))
    } else {
      console.log("login first")
      this.route.navigate(['/login']);
    }

  }

  passengers(form) {
    for (let pass of this.passengerArray) {
      if (pass.age < 3 || pass.age === 0) {
        this.ageInvalid = "*Age shouldn't be zero, Atleast age should be 3"
      } else {
        console.log(this.passengerArray);
        this.ageBoolean = true;
      }
    }
    sessionStorage.setItem('passengersList', JSON.stringify(this.passengerArray));
    console.log(sessionStorage.getItem('passengersList'));
    this.navigateToConfirmBooking();

  }
  addForm() {
    this.passenger = new Passengers();
    this.passengerArray.push(this.passenger);
  }

  removeForm(index) {
    this.passengerArray.splice(index);
  }

  navigateToConfirmBooking(){
    this.route.navigate(['confirm-booking'])
  }

}
