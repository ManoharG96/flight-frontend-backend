import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DatePipe } from '@angular/common';
import { FlightComponent } from './flight/flight.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { ViewBookedFlightComponent } from './view-booked-flight/view-booked-flight.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { ConfirmBookingsComponent } from './confirm-bookings/confirm-bookings.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckMailidComponent } from './check-mailid/check-mailid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FlightComponent,
    EditUserComponent,
    LogoutComponent,
    ResetPasswordComponent,
    ViewBookingsComponent,
    ViewBookedFlightComponent,
    ViewPassengerComponent,
    AddPassengerComponent,
    ConfirmBookingsComponent,
    ForgotPasswordComponent,
    CheckMailidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
