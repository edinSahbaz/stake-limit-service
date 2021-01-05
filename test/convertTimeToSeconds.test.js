const convertTimeToSeconds = require("./../src/util/convertTimeToSeconds");

test("Sholud Convert 5 hours to 36.000 seconds", async () => {
  expect(await convertTimeToSeconds("10:00:00")).toBe(36000);
});
