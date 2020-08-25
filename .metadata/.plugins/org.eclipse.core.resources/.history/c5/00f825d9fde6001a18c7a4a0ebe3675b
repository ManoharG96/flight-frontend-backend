package com.dxctechnology.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class SendingTokenEmailIdImpl implements SendingTokenEmailId {
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Override
	public void sendTokenEmail(String emailId, String token) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(emailId);
		message.setText("You token To Reset Password:- "+token);
		message.setSubject("Token To reset password");
		mailSender.send(message);
	}

}
