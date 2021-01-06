const configurationLimits = require("../config/configurationLimits");

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
      if (isNaN(element)) isValid = false;

      let min = configurationLimits[index].min;
      let max = configurationLimits[index].max;

      if (index != 3) {
        if (isValid && (element < min || element > max)) isValid = false;
      } else {
        if (isValid && element < min && element != max) isValid = false;
      }
    });

    return isValid;
  }
}

module.exports = Configuration;
