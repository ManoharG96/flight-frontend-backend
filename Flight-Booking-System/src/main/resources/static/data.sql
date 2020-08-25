create database flightdb;
use flightdb;
show tables;
drop table flight;
CREATE TABLE flight(
	flight_id INT NOT NULL,
	flight_name VARCHAR(50) NOT NULL,
	from_location VARCHAR(80) NOT NULL,
	to_location VARCHAR(80) NOT NULL,	
	airport_name VARCHAR(100) NOT NULL,
	price INT NOT NULL,
	departure_time VARCHAR(30) NOT NULL,
	departure_date VARCHAR(30) NOT NULL,
	PRIMARY KEY(flight_id)
);
    
show tables;
    
INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(11,'Air India','New Delhi','Bangalore','Indira Gandhi International Airport',6000,'7:25 AM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(22,'Vistara','New Delhi','Chennai','Indira Gandhi International Airport',8000,'11:15 AM','22-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(33,'IndiGo','New Delhi','Noida','Indira Gandhi International Airport','3000','12:20 PM','15-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(44,'AirAsia','New Delhi','Bangalore','Indira Gandhi International Airport',9000,'3:25 PM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(55,'SpiceJet','New Delhi','Hydrabad','Indira Gandhi International Airport',5000,'4:33 PM','11-oct-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(66,'Deccan','New Delhi','Chennai','Indira Gandhi International Airport',7000,'6:10 PM','15-oct-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(77,'Air India','Bangalore','New Delhi','Kempegowda International Airport',8000,'8:35 AM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(88,'IndiGo','Bangalore','Chennai','Kempegowda International Airport',9000,'2:20 PM','21-Oct-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(99,'AirAsia','Bangalore','Noida','Kempegowda International Airport',5000,'3:20 PM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(111,'GoAir','Bangalore','New Delhi','Kempegowda International Airport',8000,'11:50 AM','16-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(222,'SpiceJet','Bangalore','Gurgon','Kempegowda International Airport',6500,'9:40 AM','16-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(333,'Air India','Bangalore','Hydrabad','Kempegowda International Airport',8500,'5:25 AM','15-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(444,'Air India','Chennai','New Delhi','Chennai International Airport',7500,'6:18 AM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(555,'AirAsia','Chennai','Bangalore','Chennai International Airport',8000,'10:30 AM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(666,'GoAir','Chennai','Noida','Chennai International Airport',6000,'12:30 PM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(777,'IndiGo','Chennai','New Delhi','Chennai International Airport',7000,'3:45 PM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(888,'Air India','Noida','Bangalore','Jewar International Airport',8500,'8:40 AM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(919,'AirAsia','Noida','New Delhi','Jewar International Airport',9500,'11:00 AM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(949,'IndiGo','Noida','Bangalore','Jewar International Airport',7600,'1:30 PM','20-sep-2020');

INSERT INTO flight(flight_id,flight_name,from_location,to_location,airport_name,price,departure_time,departure_date) VALUES(999,'SpiceJet','Noida','Chennai','Jewar International Airport',8000,'6:30 PM','20-sep-2020');

select * from flight;