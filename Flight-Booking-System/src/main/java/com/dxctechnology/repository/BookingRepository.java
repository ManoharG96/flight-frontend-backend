package com.dxctechnology.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dxctechnology.model.Bookings;

@Repository
public interface BookingRepository extends MongoRepository<Bookings, Integer> {

	List<Bookings> findByUserId(Integer userId);

}
