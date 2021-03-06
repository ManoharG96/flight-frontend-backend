package com.dxctechnology.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.dxctechnology.exception.CustomExceptionHandlers;
import com.dxctechnology.model.Flight;
import com.dxctechnology.repository.FlightRepository;

@Component
public class FlightDAOImpl implements FlightDAO {

	@Autowired
	private FlightRepository flightRepository;

	@Override
	public ResponseEntity<?> searchFlight(String fromLocation, String toLocation, String departureDate) {
		List<Flight> flightsFromDb = flightRepository.findByFromLocationAndToLocationAndDepartureDate(fromLocation, 
				toLocation, departureDate);
		if (flightsFromDb.isEmpty()) {
			CustomExceptionHandlers userException = new CustomExceptionHandlers();
			userException.setMessage("Flight didnt find");
			userException.setDescription("Flights not available");
			throw userException;
			
		} else {
			return new ResponseEntity<List<Flight>>(flightsFromDb, HttpStatus.OK);
		}

	}

}
