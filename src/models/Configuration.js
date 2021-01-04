class Configuration {
  constructor(timeDuration, stakeLimit, hotPercentage, restrictionExpires) {
    this.timeDuration = timeDuration;
    this.stakeLimit = stakeLimit;
    this.hotPercentage = hotPercentage;
    this.restrictionExpires = restrictionExpires;
  }
}

module.exports = Configuration;
