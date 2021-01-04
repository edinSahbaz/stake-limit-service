const request = require("supertest");
const app = require("./../src/app");

test("Sholud POST new ticket to DB", async () => {
  await request(app)
    .post("/api/v1/stake-limit-service")
    .send("stake=20")
    .expect(200);
});

test("Sholud return 422 for stake value of 0", async () => {
  await request(app)
    .post("/api/v1/stake-limit-service")
    .send("stake=0")
    .expect(422);
});
