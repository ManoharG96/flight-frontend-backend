package com.dxctechnology.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dxctechnology.service.FlightService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/flight")
public class FlightController {
	
	@Autowired
	private FlightService flightService;

	@GetMapping("/search")
	public ResponseEntity<?> getFlight(@RequestParam("fromLocation") String fromLocation,
			@RequestParam("toLocation") String toLocation,@RequestParam("departureDate") String departureDate) {
		return flightService.searchFlight(fromLocation, toLocation, departureDate);
	}
}
