package com.dxctechnology.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dxctechnology.dao.FlightDAO;
import com.dxctechnology.exception.CustomExceptionHandlers;

@Service
public class FlightServiceImpl implements FlightService {

	@Autowired
	private FlightDAO flightDao;

	@Override
	public ResponseEntity<?> searchFlight(String fromLocation, String toLocation, String departureDate) {
		if (flightDao.searchFlight(fromLocation, toLocation, departureDate) == null) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("Flight Not found");
			userException.setDescription("Please enter the correct details where flights are found");
			throw userException;
		} else if(fromLocation.isEmpty()) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("FromLocation should not be empty");
			userException.setDescription("Please enter FromLocation cant be empty");
			throw userException;
		} else if (toLocation.isEmpty()) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("ToLocation should not be empty");
			userException.setDescription("Please enter ToLocation cant be empty");
			throw userException;
		} else if (departureDate.isEmpty()) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("DepartureDate should not be empty");
			userException.setDescription("Please enter DepartureDate cant be empty");
			throw userException;
		} else {
			return flightDao.searchFlight(fromLocation, toLocation, departureDate);
		}
	}

}