package com.dxctechnology.dao;

import org.springframework.http.ResponseEntity;

import com.dxctechnology.model.User;

public interface UserDAO {
	
	ResponseEntity<?> register(User user);
	ResponseEntity<?> login(String emailId, String password);
	ResponseEntity<?> edit(User user);
	ResponseEntity<?> resetPassword(String emailId, String token, String password, String confirmPassword);
	ResponseEntity<?> sendToken(String emailId);

}