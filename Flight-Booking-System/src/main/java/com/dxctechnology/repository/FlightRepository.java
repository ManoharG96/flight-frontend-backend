package com.dxctechnology.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dxctechnology.model.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer> {

	List<Flight> findByFromLocationAndToLocationAndDepartureDate(String fromLocation, String toLocation, String dateOfJou);

}
