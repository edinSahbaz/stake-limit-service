CREATE TABLE ticket
(
    id VARCHAR(36) NOT NULL,
    deviceId VARCHAR(36) NOT NULL,
    stake DOUBLE NOT NULL
);

CREATE TABLE configuration
(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    timeDuration INT(11) NOT NULL,
    stakeLimit DOUBLE NOT NULL,
    hotPercentage INT(11) NOT NULL,
    restrictionExpires INT(11) NOT NULL
);