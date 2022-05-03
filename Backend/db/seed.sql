DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `username` varchar(255) default NULL,
  `password` varchar(100) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `users` (`username`,`password`)
VALUES
  ("Bo Guerra","1234"),
  ("Stacy Sandoval","2345"),
  ("Laura Larsen","3456"),
  ("Deirdre Cantrell","4567"),
  ("Silas Ware","5678");
