import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  success: boolean = false;
  

  ngOnInit() {
    this.success = false;
    if (sessionStorage.getItem('userData') != null) {
      this.success = true;
    } else {
      this.success = false;
    }
  }
  hiddingButton(){
    this.success = false;
    if (sessionStorage.getItem('userData') != null) {
      this.success = true;
    } else {
      this.success = false;
    }
  }

  title = 'Flight-System-Project';

}
