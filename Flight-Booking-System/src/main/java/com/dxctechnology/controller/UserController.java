package com.dxctechnology.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dxctechnology.model.User;
import com.dxctechnology.service.UserService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/login")
	public ResponseEntity<?> login(@RequestParam("emailId") String emailId, 
			@RequestParam("password") String password){
		return userService.login(emailId, password);
	}

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user){
		return userService.register(user);
	}

	@PutMapping("/edit")
	public ResponseEntity<?> edit(@RequestBody User user){
		return userService.edit(user);
	}

	@PostMapping("/resetpassword")
	public ResponseEntity<?> resetPassword(@RequestBody User user){
		return userService.resetPassword(user.getEmailId(), user.getToken(), 
				user.getPassword(), user.getConfirmPassword());
	}

	@PostMapping("/sendtoken")//reset password in front-end
	public ResponseEntity<?> setToken(@RequestBody User user){
		return userService.sendToken(user.getEmailId());

	}

	@GetMapping("/logout")
	public ResponseEntity<?> logout(HttpServletRequest request){
		HttpSession session = request.getSession();
		if (session != null ) {
			session.invalidate();
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);	
		} else {
			return new ResponseEntity<HttpStatus>(HttpStatus.GATEWAY_TIMEOUT);
		}
	}
	
	@GetMapping("/emailid")//forgot password
	public ResponseEntity<?> sendToken(@RequestParam("emailId") String emailId){
		return userService.sendToken(emailId);
	}

}
