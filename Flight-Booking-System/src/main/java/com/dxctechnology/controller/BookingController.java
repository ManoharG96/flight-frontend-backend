package com.dxctechnology.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dxctechnology.model.Bookings;
import com.dxctechnology.service.BookingService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/booking")
public class BookingController {

	@Autowired
	private BookingService bookingService;

	@GetMapping("/getbooking")
	public ResponseEntity<?> getBookings(@RequestParam("userId") int userId){
		return bookingService.getbookings(userId);
	}

	@PutMapping("/addbooking")
	public ResponseEntity<?> addBookings(@RequestBody Bookings book) {
		return bookingService.addBookings(book);
	}

}
