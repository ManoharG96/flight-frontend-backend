import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FlightComponent } from './flight/flight.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { ViewBookedFlightComponent } from './view-booked-flight/view-booked-flight.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { ConfirmBookingsComponent } from './confirm-bookings/confirm-bookings.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckMailidComponent } from './check-mailid/check-mailid.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flight', component: FlightComponent },
  { path: 'add-passenger', component: AddPassengerComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'view-bookings', component: ViewBookingsComponent },
  { path: 'booked-flights', component: ViewBookedFlightComponent },
  { path: 'booked-passenger', component: ViewPassengerComponent },
  { path: 'confirm-booking', component: ConfirmBookingsComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'check-mailid', component: CheckMailidComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
