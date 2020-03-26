DROP DATABASE IF EXISTS socialNetworkDB;

CREATE DATABASE socialNetworkDB;

USE socialNetworkDB;

CREATE TABLE users(
  userId int NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL UNIQUE,
  email VARCHAR(40) NOT NULL UNIQUE,
  password VARCHAR(10) NOT NULL,
  firstName VARCHAR(40),
  lastName VARCHAR(40),
  PRIMARY KEY (userId)
);

CREATE TABLE friends(
  friendId int NOT NULL,
  userId int NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(userId)
);

CREATE TABLE posts(
  postId int NOT NULL AUTO_INCREMENT,
  title VARCHAR(20) NOT NULL,
  content VARCHAR(255) NOT NULL,
  userId int,
  PRIMARY KEY (postId),
  FOREIGN KEY (userId) REFERENCES users(userId)
);

INSERT INTO users (username, email, password, firstName, lastName) VALUES ("johndoe", "johndoe@gmail.com", "password", "John", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("janedoe", "janedoe@gmail.com", "password", "Jane", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("joshdoe", "joshdoe@gmail.com", "password", "Josh", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("jennyhdoe", "jennyhdoe@gmail.com", "password", "Jenny", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("josephhdoe", "josephhdoe@gmail.com", "password", "Joseph", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("jaredhdoe", "jaredhdoe@gmail.com", "password", "Jared", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("jimhdoe", "jimhdoe@gmail.com", "password", "Jim", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("georgehdoe", "georgehdoe@gmail.com", "password", "George", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("samhdoe", "samhdoe@gmail.com", "password", "Sam", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("dannyhdoe", "dannyhdoe@gmail.com", "password", "Danny", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("gennyhdoe", "gennyhdoe@gmail.com", "password", "Genny", "Doe");
INSERT INTO users (username, email, password, firstName, lastName) VALUES ("hollyhdoe", "hollyhdoe@gmail.com", "password", "Holly", "Doe");


INSERT INTO friends (friendId, userId) VALUES (10, 1);
INSERT INTO friends (friendId, userId) VALUES (10, 3);
INSERT INTO friends (friendId, userId) VALUES (10, 4);
INSERT INTO friends (friendId, userId) VALUES (2, 3);
INSERT INTO friends (friendId, userId) VALUES (2, 5);
INSERT INTO friends (friendId, userId) VALUES (6, 4);
INSERT INTO friends (friendId, userId) VALUES (3, 10);
INSERT INTO friends (friendId, userId) VALUES (3, 8);
INSERT INTO friends (friendId, userId) VALUES (4, 8);
INSERT INTO friends (friendId, userId) VALUES (4, 2);
INSERT INTO friends (friendId, userId) VALUES (5, 7);
INSERT INTO friends (friendId, userId) VALUES (5, 2);
INSERT INTO friends (friendId, userId) VALUES (5, 2);
INSERT INTO friends (friendId, userId) VALUES (7, 1);
INSERT INTO friends (friendId, userId) VALUES (7, 10);

INSERT INTO posts (title, content, userId) VALUES ("Jobs", "ksbckcjbs", 1);
INSERT INTO posts (title, content, userId) VALUES ("vckbj", "ksbckcjbs", 1);

INSERT INTO posts (title, content, userId) VALUES ("Jobs", "ksbckcjbs", 2);
INSERT INTO posts (title, content, userId) VALUES ("vckbj", "ksbckcjbs", 2);

