CREATE DATABASE GreatBay;
USE GreatBay;
CREATE TABLE items(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	highestBid DECIMAL(10,2) NULL,
	PRIMARY KEY(id)
);