package com.dxctechnology.exception;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpServerErrorException.InternalServerError;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(CustomExceptionHandlers.class)
	public ResponseEntity<ExceptionResponse> userNotFound(CustomExceptionHandlers exception){
		ExceptionResponse response = new ExceptionResponse();
		response.setStatusCode(HttpStatus.NOT_FOUND.value());
		response.setMessage(exception.getMessage());
		response.setDescription(exception.getDescription());
		response.setDate(LocalDate.now());
		return new ResponseEntity<ExceptionResponse>(response, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(InternalServerError.class)
	public ResponseEntity<ExceptionResponse> fieldNotNull(CustomExceptionHandlers exception){
		ExceptionResponse response = new ExceptionResponse();
		response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
		response.setMessage(exception.getMessage());
		response.setDescription(exception.getDescription());
		response.setDate(LocalDate.now());
		return new ResponseEntity<ExceptionResponse>(response, HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
