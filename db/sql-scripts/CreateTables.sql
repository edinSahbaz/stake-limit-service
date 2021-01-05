CREATE TABLE ticket (
  id VARCHAR(36) NOT NULL,
  deviceId VARCHAR(36) NOT NULL,
  stake DOUBLE NOT NULL,
  timeStamp TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE configuration (
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  timeDuration INT(11) NOT NULL,
  stakeLimit DOUBLE NOT NULL,
  hotPercentage INT(11) NOT NULL,
  restrictionExpires INT(11) NOT NULL
);
CREATE TABLE device (
  id VARCHAR(36) NOT NULL,
  stake DOUBLE NOT NULL,
  blocked TINYINT(1) DEFAULT 0 NOT NULL,
  blockedTimeStamp TIME NULL DEFAULT NULL
);