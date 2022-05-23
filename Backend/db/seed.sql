/*--Initial seeder for the db*/
/*CREATE SCHEMA `HouseAppDB2`;*/
USE `houseappdb`;

/* users */
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` mediumint(8) unsigned NOT NULL auto_increment,
  `username` varchar(255),
  `email` varchar (255),
  `password` varchar(255),
  `adress` varchar (255),
  `isHouseMaster` boolean,
  PRIMARY KEY (`user_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `users` (
    `username`,
    `password`,
    `adress`,
    `isHouseMaster`
  )
VALUES
  ("Adam", "1234", 'Adress2', '1'),
  ("Eve", "2345", 'Adress2', '1'),
  ("Lucifer", "3456", 'Adress1', '1'),
  ("God", "4567", 'Adress3', '0'),
  ("Maze", "5678", 'Adress3', '0');

/*--house*/
DROP TABLE IF EXISTS `house`;

CREATE TABLE `house` (
  `house_id` mediumint(8) unsigned NOT NULL auto_increment,
  `adress` varchar (255),
  `HM_id` mediumint(8),
  PRIMARY KEY (`house_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `house` (`adress`, `HM_id`)
VALUES
  ("Adress1", '1'),
  ("Adress2", '1'),
  ("Adress3", '2'),
  ("Adress4", '2'),
  ("Adress5", '3');

/*residental meeting: */
DROP TABLE IF EXISTS `residental_meeting`;

CREATE TABLE `residental_meeting` (
  `resmeet_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(45),
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `house_id` mediumint(8),
  `financial_table_id` mediumint(8),
  PRIMARY KEY (`resmeet_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `residental_meeting` (
    `title`,
    `description`,
    `financial_table_id`,
    `house_id`
  )
VALUES
  (
    "Title1(res.met)",
    "Desc(res.met): Bla bla bla bla ",
    '1',
    '1'
  ),
  (
    "Title2(res.met)",
    "Desc2(res.met): Bla2 bla2 bla2 bla2",
    '2',
    '2'
  ),
  (
    "Title3(res.met)",
    "Desc3(res.met): Bla3 bla3 bla3 bla3",
    '3',
    '3'
  ),
  (
    "Title4(res.met)",
    "Desc4(res.met): Bla4 bla4 bla4 bla4",
    '4',
    '5'
  );

/*--financial:*/
DROP TABLE IF EXISTS `financial`;

CREATE TABLE `financial` (
  `financial_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(45),
  `plan` int,
  `fact` int,
  `nextplan` int,
  `house_id` mediumint(8),
  PRIMARY KEY (`financial_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `financial` (
    `title`,
    `description`,
    `plan`,
    `fact`,
    `nextplan`,
    `house_id`
  )
VALUES
  (
    "Title1",
    "Desc: Bla bla bla bla ",
    '5000',
    '4500',
    '5500',
    '1'
  ),
  (
    "Title2",
    "Desc2: Bla2 bla2 bla2 bla2",
    '10000',
    '12500',
    '8500',
    '2'
  ),
  (
    "Title3",
    "Desc3: Bla3 bla3 bla3 bla3",
    '52000',
    '43500',
    '3500',
    '3'
  ),
  (
    "Title4",
    "Desc4: Bla4 bla4 bla4 bla4",
    '22000',
    '12500',
    '22500',
    '5'
  );

/*-news */
DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `news_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(45),
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `label` ENUM(
    'Pinned',
    'HMaster',
    'Residental'
  ),
  `house_id` mediumint(8),
  PRIMARY KEY (`news_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `news` (
    `title`,
    `description`,
    `label`
  )
VALUES
  ("Title1", "Desc: Bla bla bla bla ", 'Pinned'),
  (
    "Title2",
    "Desc2: Bla2 bla2 bla2 bla2",
    'HMaster'
  ),
  (
    "Title3",
    "Desc3: Bla3 bla3 bla3 bla3",
    'HMaster'
  ),
  (
    "Title4",
    "Desc4: Bla4 bla4 bla4 bla4",
    'Residental'
  ),
  (
    "Title4",
    "Desc4: Bla4 bla4 bla4 bla4",
    'Pinned'
  );

/*-poll */
DROP TABLE IF EXISTS `poll`;

CREATE TABLE `poll` (
  `poll_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(45),
  `votes` int DEFAULT 0,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `label` ENUM('HMaster', 'Residental'),
  `house_id` mediumint(8),
  PRIMARY KEY (`poll_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `poll` (
    `title`,
    `description`,
    `label`,
    `house_id`
  )
VALUES
  ("Title1", "Desc: Bla bla bla bla ", 'HMaster', 1),
  (
    "Title2",
    "Desc: Bla bla bla bla ",
    'Residental',
    1
  ),
  (
    "Title3",
    "Desc: Bla bla bla bla ",
    'Residental',
    2
  );