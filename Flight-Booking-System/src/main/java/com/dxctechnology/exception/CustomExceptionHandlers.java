package com.dxctechnology.exception;

public class CustomExceptionHandlers extends RuntimeException {

	private static final long serialVersionUID = 1L;

	private int statusCode;
	private String message;
	private String description;
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	
	
}
