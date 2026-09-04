const request = require("supertest");
const app = require("./index");

test("GET / returns the application status message", async () => {
  const response = await request(app).get("/");

  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("CICD pipeline is running successfully");
});

test("GET /health returns an ok status", async () => {
  const response = await request(app).get("/health");

  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({ status: "ok" });
});

test("GET /version returns the application version", async () => {
  const response = await request(app).get("/version");

  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({ version: "1.0.0" });
});
