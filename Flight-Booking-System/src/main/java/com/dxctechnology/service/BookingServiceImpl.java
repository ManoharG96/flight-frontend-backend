package com.dxctechnology.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dxctechnology.dao.BookingsDAO;
import com.dxctechnology.exception.CustomExceptionHandlers;
import com.dxctechnology.model.Bookings;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	private BookingsDAO bookingDao;

	@Override
	public ResponseEntity<?> addBookings(Bookings book) {
		if (book.getFlightDetails().toString().isEmpty()) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("Flight Details should not be empty");
			userException.setDescription("Flight Details cant be empty");
			throw userException;
		}else if (book.getPassengerDetails().isEmpty()) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("Passenger details should not be empty");
			userException.setDescription("Password details cant be empty");
			throw userException;
		}else if (book.getUserId() == 0) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("UserId cant be zero should not be empty");
			userException.setDescription("Userid cant be empty");
			throw userException;
		}else if (book.getBookingPrice() == 0) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("Price Cant be zero should not be empty");
			userException.setDescription("Price cant be empty");
			throw userException;
		}else {
			return bookingDao.addBookings(book);
		}

	}

	@Override
	public ResponseEntity<?> getbookings(int userId) {
		if (userId == 0) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("User id be zero should not be empty");
			userException.setDescription("User Id cant be empty");
			throw userException;
		} else 
			return bookingDao.getbookings(userId);
	}

}
