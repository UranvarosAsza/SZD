--Initial seeder for the db

--users
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `username` varchar(255) default NULL,
  `password` varchar(100) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `users` (`username`,`password`)
VALUES
  ("Adam","1234"),
  ("Eve","2345"),
  ("Lucifer","3456"),
  ("God","4567"),
  ("Maze","5678");

--more tables and querys will come here:
/*

INSERT INTO users (username, password) VALUES ('Adam', '1111');
INSERT INTO users (username, password) VALUES ('Eve', '2222');
INSERT INTO users (username, password) VALUES ('Lucifer', '3333');
INSERT INTO users (username, password) VALUES ('God', '4444');
INSERT INTO users (username, password) VALUES ('Wasabi', '5555');
*/