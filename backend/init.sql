CREATE TABLE charades (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE never_have_i_ever (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE paranoia (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE pictionary (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE smash_or_pass (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE kiss_marry_kill (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE storytime (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE truths (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE dares (
  id INT PRIMARY KEY AUTO_INCREMENT,
  prompt TEXT
);

CREATE TABLE would_you_rather (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first TEXT,
  second TEXT
);

LOAD DATA INFILE '/var/lib/mysql-files/charades.csv'
INTO TABLE charades
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(prompt);

LOAD DATA INFILE '/var/lib/mysql-files/never-have-i-ever.csv'
INTO TABLE never_have_i_ever
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(prompt);

LOAD DATA INFILE '/var/lib/mysql-files/paranoia.csv'
INTO TABLE paranoia
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(prompt);

LOAD DATA INFILE '/var/lib/mysql-files/pictionary.csv'
INTO TABLE pictionary
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(prompt);

LOAD DATA INFILE '/var/lib/mysql-files/smash-or-pass.csv'
INTO TABLE smash_or_pass
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(prompt);

LOAD DATA INFILE '/var/lib/mysql-files/kiss-marry-kill.csv'
INTO TABLE kiss_marry_kill
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(prompt);

LOAD DATA INFILE '/var/lib/mysql-files/storytime.csv'
INTO TABLE storytime
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(prompt);

LOAD DATA INFILE '/var/lib/mysql-files/truth-or-dare.csv'
INTO TABLE truths
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(prompt, @dummy);

LOAD DATA INFILE '/var/lib/mysql-files/truth-or-dare.csv'
INTO TABLE dares
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(@dummy, prompt);

LOAD DATA INFILE '/var/lib/mysql-files/would-you-rather.csv'
INTO TABLE would_you_rather
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(first, second);