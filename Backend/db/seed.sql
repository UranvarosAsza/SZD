/*--Initial seeder for the db*/
 /*CREATE SCHEMA `HouseAppDB2`;*/
 
 USE `houseappdb`;
 
 /* users */
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` mediumint(8) unsigned NOT NULL auto_increment,
  `username` varchar(45),
  `password` varchar(45),
  `name` varchar(45),
  `adress` ENUM(
    'Adress1 ',
    'Adress2',
    'Adress3',
    'Adress4',
    'Adress5',
    'Adress6'
  ),
  `floor_number` int,
  `flat_number` int,
  `isAdmin` tinyint,
  `isHouseMaster` tinyint,
  `houses` json,
  PRIMARY KEY (`user_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `users` (
    `username`,
    `password`,
    `adress`,
    `isAdmin`,
    `isHouseMaster`
  )
VALUES
  ("Adam", "1234", 'Adress2', '1', '1'),
  ("Eve", "2345", 'Adress2', '0', '0'),
  ("Lucifer", "3456", 'Adress1', '0', '0'),
  ("God", "4567", 'Adress3', '0', '1'),
  ("Maze", "5678", 'Adress3', '0', '0');

/*--house*/
DROP TABLE IF EXISTS `house`;

/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
CREATE TABLE `house` (
  `house_id` mediumint(8) unsigned NOT NULL auto_increment,
  `adress` ENUM(
    'Adress1 ',
    'Adress2',
    'Adress3',
    'Adress4',
    'Adress5',
    'Adress6'
  ),
  `numberoffloors` varchar(45),
  `HM_id` mediumint(8),
  PRIMARY KEY (`house_id`)
) AUTO_INCREMENT = 1;

/*residental meeting: */
DROP TABLE IF EXISTS `residental_meeting`;

CREATE TABLE `residental_meeting` (
  `resmeet_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(45),
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `financial_table_id` mediumint(8),
  PRIMARY KEY (`resmeet_id`)
) AUTO_INCREMENT = 1;

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

/*-more tables and querys will come here
 news */
DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `news_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(45),
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `label` ENUM(
    'Admin ',
    'HMaster',
    'Residental'
  ),
  PRIMARY KEY (`news_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `news` (
    `title`,
    `description`,
    `label`
  )
VALUES
  ("Title1", "Desc: Bla bla bla bla ", 'Admin'),
  ("Title2", "Desc2: Bla2 bla2 bla2 bla2", 'HMaster'),
  ("Title3", "Desc3: Bla3 bla3 bla3 bla3", 'HMaster'),
  ("Title4", "Desc4: Bla4 bla4 bla4 bla4", 'Residental');