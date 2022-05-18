CREATE TABLE users (
  id INT AUTO_INCREMENT,
  name varchar(255),
  email varchar(255),
  password varchar(255),
  createdAt datetime DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE wise_sayings (
  id INT AUTO_INCREMENT,
  script varchar(255),
  talker varchar(255),
  createdAt datetime DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE user_wise_sayings (
  id INT AUTO_INCREMENT,
  user_id INT,
  wise_saying_id INT,
  createdAt datetime DEFAULT CURRENT_TIMESTAMP,
  updatedAt datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
ALTER TABLE user_wise_sayings ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE user_wise_sayings ADD FOREIGN KEY (wise_saying_id) REFERENCES wise_sayings (id);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql -p -Dproject(데이터베이스 이름 project)
 *  to create the database and the tables.*/