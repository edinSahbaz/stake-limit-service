const request = require("supertest");
const app = require("./../src/app");

test("Should return 404 for non-existent route", async () => {
  await request(app).get("/api/v1/stakes").expect(404);
});

test("Should return configuration object", async () => {
  await request(app)
    .get("/api/v1/stake-limit-service/configuration")
    .expect(200);
});
