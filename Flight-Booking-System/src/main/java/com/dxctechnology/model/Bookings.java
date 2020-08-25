package com.dxctechnology.model;

import java.util.List;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Bookings {
	
	private Integer userId;
	private int bookingId;
	private Flight flightDetails;
	private List<Passenger> passengerDetails;
	private double bookingPrice;
	
	
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Flight getFlightDetails() {
		return flightDetails;
	}
	public void setFlightDetails(Flight flightDetails) {
		this.flightDetails = flightDetails;
	}
	public List<Passenger> getPassengerDetails() {
		return passengerDetails;
	}
	public void setPassengerDetails(List<Passenger> passengerDetails) {
		this.passengerDetails = passengerDetails;
	}
	public double getBookingPrice() {
		return bookingPrice;
	}
	public void setBookingPrice(double bookingPrice) {
		this.bookingPrice = bookingPrice;
	}
}
