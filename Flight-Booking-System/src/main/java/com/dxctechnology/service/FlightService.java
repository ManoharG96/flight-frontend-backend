package com.dxctechnology.service;

import org.springframework.http.ResponseEntity;

public interface FlightService {
	ResponseEntity<?> searchFlight(String fromLocation, String toLocation, String departureDate);
}
