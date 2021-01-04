const configurationLimits = require("../util/configurationLimits");

class Configuration {
  constructor(timeDuration, stakeLimit, hotPercentage, restrictionExpires) {
    this.timeDuration = timeDuration;
    this.stakeLimit = stakeLimit;
    this.hotPercentage = hotPercentage;
    this.restrictionExpires = restrictionExpires;
  }

  validateInput() {
    let isValid = true;

    Object.values(this).forEach((element, index) => {
      let min = configurationLimits[index].min;
      let max = configurationLimits[index].max;

      if (isValid && (element < min || element > max)) isValid = false;
    });

    return isValid;
  }
}

module.exports = Configuration;
