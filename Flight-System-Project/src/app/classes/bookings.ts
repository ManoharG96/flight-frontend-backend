import { Flight } from './flight';
import { Passengers } from './passengers';

export class Bookings {
    userId: number;
    bookingId: bigint;
    flightDetails: Flight;
    passengerDetails: Passengers[];
    bookingPrice: number;
}
