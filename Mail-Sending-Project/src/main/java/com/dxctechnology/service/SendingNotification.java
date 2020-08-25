package com.dxctechnology.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.dxctechnology.model.User;

@Service
public class SendingNotification {
	
	@Autowired
	private JavaMailSender mailSender;
	
	public void sendNotification(User user) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(user.getEmail());
		message.setText("Hello Hi");
		message.setSubject("Text To send Demo mail");
		mailSender.send(message);
	}

}
