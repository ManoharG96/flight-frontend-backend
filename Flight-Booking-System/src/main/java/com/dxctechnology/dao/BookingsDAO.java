package com.dxctechnology.dao;

import org.springframework.http.ResponseEntity;

import com.dxctechnology.model.Bookings;

public interface BookingsDAO {
	
	ResponseEntity<?> addBookings(Bookings book);
	ResponseEntity<?> getbookings(int userId);

}
