const Configuration = require("./../src/models/Configuration");
const config = new Configuration(7200, 100000, 75, 300);

test("Validates data input to be withing the given range", () => {
  expect(config.validateInput()).toBe(true);
});
