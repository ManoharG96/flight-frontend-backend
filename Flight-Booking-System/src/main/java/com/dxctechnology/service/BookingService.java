package com.dxctechnology.service;

import org.springframework.http.ResponseEntity;

import com.dxctechnology.model.Bookings;

public interface BookingService {
	
	ResponseEntity<?> addBookings(Bookings book);
	ResponseEntity<?> getbookings(int userId);

}