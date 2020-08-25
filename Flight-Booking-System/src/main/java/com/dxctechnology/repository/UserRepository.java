package com.dxctechnology.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dxctechnology.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findByEmailIdAndPassword(String emailId, String password);
	User findByEmailId(String emailId);
	User findByToken(String token);
	
}
