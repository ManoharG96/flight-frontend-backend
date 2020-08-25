package com.dxctechnology.dao;

import org.springframework.http.ResponseEntity;

public interface FlightDAO {
	
	ResponseEntity<?> searchFlight(String fromLocation, String toLocation, String departureDate);

}
