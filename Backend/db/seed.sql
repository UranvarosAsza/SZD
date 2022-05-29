/*--Initial seeder for the db*/
/*CREATE SCHEMA `HouseAppDB2`;*/
/*USE `houseappdb`;*/
/* users */
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` mediumint(8) unsigned NOT NULL auto_increment,
  `username` varchar(255),
  `email` varchar (255),
  `password` varchar(255),
  `adress` varchar (255),
  `house_id` int,
  `isHouseMaster` boolean,
  PRIMARY KEY (`user_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `users` (
    `username`,
    `email`,
    `password`,
    `adress`,
    `isHouseMaster`,
    `house_id`
  )
VALUES
  (
    "Samuel Ross",
    "risus.donec@aol.net",
    "1234",
    'Adress2',
    '1',
    '1'
  ),
  (
    "Jonas Cummings",
    "diam.eu@outlook.couk",
    "2345",
    'Adress2',
    '1',
    '2'
  ),
  (
    "Jack Gibson",
    "duis.cursus.diam@protonmail.net",
    "3456",
    'Adress1',
    '1',
    '3'
  ),
  (
    "Tate Slater",
    "tincidunt.vehicula@protonmail.com",
    "4567",
    'Adress3',
    '0',
    '4'
  ),
  (
    "Anthony Sandoval",
    "feugiat.metus@icloud.net",
    "5678",
    'Adress3',
    '0',
    '5'
  );

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
  ("P.O. Box 500, 5212 Diam St.", '1'),
  ("5755 Phasellus Street", '1'),
  ("3678 Elit. Avenue", '2'),
  ("7077 Nulla. Street", '2'),
  ("447-5844 Interdum St.", '3');

/*residental meeting: */
DROP TABLE IF EXISTS `residental_meeting`;

CREATE TABLE `residental_meeting` (
  `resmeet_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(255),
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `house_id` mediumint(8),
  PRIMARY KEY (`resmeet_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `residental_meeting` (
    `title`,
    `description`,
    `house_id`
  )
VALUES
  (
    "Lakógyűlés 5212 Diam St. 2022.02.10",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
     nisi ut aliquip ex ea commodo consequat.",
    '1'
  ),
  (
    "Lakógyűlés Phasellus Street 2022.01.13",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    '2'
  ),
  (
    "Lakógyűlés Elit. Avenue 2021.12.03",
    "A lakógyűlésen megbeszéltek: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ",
    '3'
  ),
  (
    "Lakógyűlés Nulla. Street 2021.11.28",
    "A lakógyűlésen megbeszéltek: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ",
    '4'
  ),
  (
    "Lakógyűlés Interdum St. 2021.10.08",
    "A lakógyűlésen megbeszéltek: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ",
    '5'
  );

/*--financial:*/
DROP TABLE IF EXISTS `financial`;

CREATE TABLE `financial` (
  `financial_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(255),
  `plan` int,
  `fact` int,
  `nextplan` int,
  `house_id` mediumint(8),
  `res_meet_id` mediumint(8),
  PRIMARY KEY (`financial_id`)
) AUTO_INCREMENT = 1;

INSERT INTO
  `financial` (
    `title`,
    `description`,
    `plan`,
    `fact`,
    `nextplan`,
    `house_id`,
    `res_meet_id`
  )
VALUES
  (
    "Kémény tisztítás",
    "A kéményseprők kiszállási díjja + munka ",
    '5000',
    '4500',
    '0',
    '1',
    '1'
  ),
  (
    "Title2",
    "Desc2: Bla2 bla2 bla2 bla2",
    '10000',
    '12500',
    '8500',
    '2',
    '1'
  ),
  (
    "Title3",
    "Desc3: Bla3 bla3 bla3 bla3",
    '52000',
    '43500',
    '3500',
    '3',
    '1'
  ),
  (
    "Title4",
    "Desc4: Bla4 bla4 bla4 bla4",
    '22000',
    '12500',
    '22500',
    '5',
    '1'
  );

/*-news */
DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `news_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(255),
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
    `label`,
    `house_id`
  )
VALUES
  (
    "Vízóra leolvasás",
    "Kedves lakók, a lakícmen 06.20.-ai dátummal vízóral eolvasás lesz.",
    'Pinned',
    '1'
  ),
  (
    "Lomtalanítás",
    "Kedves lakók, a lakícmükön 06.30-án tartanak lomtanaítást.",
    'Pinned',
    '1'
  ),
  (
    "Lomtalanítás",
    "Kedves lakók, az önök lakícmén 06.08-án tartanak lomtanaítást.",
    'Pinned',
    '2'
  ),
  (
    "Gázóra leolvasás",
    "Kedves lakók, az alábbi lakícmen 06.25.-ai dátummal gázóra leolvasás lesz.",
    'Pinned',
    '2'
  ),
  (
    "Villanyóra karbantartás",
    "Kedves lakók, az alábbi lakícmen 06.02.-ai dátummalellenőrzik és  karbantartják a villanyórákat.",
    'Pinned',
    '3'
  ),
  (
    "Lomtalanítás",
    "Kedves lakók, az alábbi lakícmen 07.02-án tartanak lomtanaítást.",
    'Pinned',
    '3'
  ),
  (
    "Kerékpár tárolás",
    "Felhívnám a kedves lakók figyelmét hogy a lépcsőházban nem lehet tárolni kerékpárt illetve rollert, köszönettel: KK.",
    'HMaster',
    '1'
  ),
  (
    "Kerékpár tárolás",
    "Felhívnám a kedves lakók figyelmét hogy a lépcsőházban nem lehet tárolni kerékpárt illetve rollert, köszönettel: KK.",
    'HMaster',
    '2'
  ),
  (
    "É-i bejárat",
    "Felhívnám a kedves lakók figyelmét hogy a lépcsőház északi bejárata nem üzemel,előreláthatólag a jövő héti javításáig köszönettel: KK.",
    'HMaster',
    '3'
  ),
  (
    "Muskátli",
    "Kedves lakótársak, a minap kisség sok palántát vettem melyek nem férnek el az erkélyemen. 4 palánta muskátli elvihető az 1. emelet 2-ből.",
    'Residental',
    '1'
  ),
  (
    "Sütemény",
    "Kedves lakótársak, a minap kisség sok süteményt sütöttem. 2 tálca sütemény elvihető a 3. emelet 4-ből.",
    'Residental',
    '2'
  ),
  (
    "Költözés",
    "Kedves lakók a keddi (06.14.) napon költünk emiatt elsőre is elnézést az esetleges kellemetlenségekért.",
    'Residental',
    '2'
  ),
  (
    "Pakolás",
    "Kedves lakótársak, a lomtalaítás miatt segítséget kérnék a pincém kipakolására. Aki tudna segíteni a pincéknél megtalál holnap reggel.",
    'Residental',
    '3'
  ),
  (
    "Felújítási munkálatok",
    "Kedves lakők előreláthatólag 2 hétig felújítást végzünk a 2. emelet 4-ben, az okozott kellemetlenségek miatt elnézést kerünk: Kovácsék.",
    'Residental',
    '3'
  ),
  (
    "Lorem ipsum",
    "Kedves lakótársak, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    'Residental',
    '4'
  ),
  (
    "Lorem ipsum",
    "Kedves lakótársak, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    'Residental',
    '4'
  ),
  (
    "Lorem ipsum",
    "Kedves lakótársak, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    'Residental',
    '4'
  ),
  (
    "Lorem ipsum",
    "Kedves lakótársak, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    'Residental',
    '5'
  ),
  (
    "Lorem ipsum",
    "Kedves lakótársak, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    'Residental',
    '5'
  ),
  (
    "Lorem ipsum",
    "Kedves lakótársak, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    'Residental',
    '5'
  );

/*-poll */
DROP TABLE IF EXISTS `poll`;

CREATE TABLE `poll` (
  `poll_id` mediumint(8) unsigned NOT NULL auto_increment,
  `title` varchar(45),
  `description` varchar(255),
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
  (
    "Kukák",
    "A lakóháznak lenne-e szüksége új szemetesektre?",
    'HMaster',
      '1'
  ),
  (
    "Festés",
    "Kedves lakók segítene, valaki festeni pénteken? -Kovácsék",
    'Residental',
    '1'
  ),
  (
    "Lorem ipsum",
    "dolor sit amet, consectetur adipiscing elit, sed ",
    'Residental',
    '2'
  ),
  (
    "Lorem ipsum",
    "dolor sit amet, consectetur adipiscing elit, sed ",
    'HMaster',
    '2'
  ),
(
    "Lorem ipsum",
    "dolor sit amet, consectetur adipiscing elit, sed ",
    'Residental',
    '3'
  ),
  (
    "Lorem ipsum",
    "dolor sit amet, consectetur adipiscing elit, sed ",
    'Hmaster',
    '3'
  ),
  (
    "Lorem ipsum",
    "dolor sit amet, consectetur adipiscing elit, sed ",
    'Residental',
    '4'
  ),
  (
    "Lorem ipsum",
    "dolor sit amet, consectetur adipiscing elit, sed ",
    'Hmaster',
    '4'
  ),
  (
    "Lorem ipsum",
    "dolor sit amet, consectetur adipiscing elit, sed ",
    'Residental',
    '5'
  ),
  (
    "Lorem ipsum",
    "dolor sit amet, consectetur adipiscing elit, sed ",
    'Hmaster',
    '5'
  )
;