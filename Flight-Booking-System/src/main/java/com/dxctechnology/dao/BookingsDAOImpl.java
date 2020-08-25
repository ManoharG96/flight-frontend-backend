package com.dxctechnology.dao;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.dxctechnology.exception.CustomExceptionHandlers;
import com.dxctechnology.model.Bookings;
import com.dxctechnology.repository.BookingRepository;

@Component
public class BookingsDAOImpl implements BookingsDAO{

	@Autowired
	private BookingRepository repo;

	@Override
	public ResponseEntity<?> addBookings(Bookings book) {
		if (book.toString().isEmpty()) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("Please check all the send booking details");
			userException.setDescription("Bookings object passed is empty");
			throw userException;
		} else {
			book.setBookingId(book.hashCode());
			repo.save(book);
			return new ResponseEntity<Bookings>(book, HttpStatus.OK);
		}
	}

	@Override
	public ResponseEntity<?> getbookings(int userId){
		List<Bookings> bookingFromDb = repo.findByUserId(userId);
		if (bookingFromDb.isEmpty()) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("Enter your didnt booked any flight");
			userException.setDescription("Please search and book the flight");
			throw userException;
		} else {
			return new ResponseEntity<List<Bookings>>(bookingFromDb, HttpStatus.OK);
		}
	}
}
