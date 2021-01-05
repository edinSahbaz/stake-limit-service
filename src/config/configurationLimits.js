const configurationLimits = [
  { param: "timeDuration", min: 300, max: 86400 },
  { param: "stakeLimit", min: 1, max: 10000000 },
  { param: "hotPercentage", min: 1, max: 100 },
  { param: "restrictionExpires", min: 60, max: 0 },
];

module.exports = configurationLimits;
