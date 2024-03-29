CREATE TABLE ticket (
  id VARCHAR(36) PRIMARY KEY NOT NULL,
  deviceId VARCHAR(36) NOT NULL,
  stake DOUBLE NOT NULL,
  timeStamp TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE configuration (
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  timeDuration INT(11) NOT NULL,
  stakeLimit DOUBLE NOT NULL,
  hotPercentage INT(11) NOT NULL,
  restrictionExpires INT(11) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE device (
  id VARCHAR(36) PRIMARY KEY NOT NULL,
  stakes DOUBLE NOT NULL,
  blocked TINYINT(1) DEFAULT 0 NOT NULL,
  blockedTimeStamp TIME NULL DEFAULT NULL,
  registeredTimeStamp TIME NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO
  configuration(
    timeDuration,
    stakeLimit,
    hotPercentage,
    restrictionExpires
  )
VALUES
  (300, 1000, 75, 120)