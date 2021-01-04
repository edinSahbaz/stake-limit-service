const request = require("supertest");
const app = require("./../src/app");

test("Sholud post new ticket to DB", async () => {
  await request(app)
    .post("/api/v1/stake-limit-service")
    .send("stake=20")
    .expect(200);
});
