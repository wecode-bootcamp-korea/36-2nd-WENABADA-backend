const request = require("supertest");
const axios = require("axios");
const { createApp } = require("../app");
const { database } = require("../models/database");

describe("kakao login", () => {
  let app;

beforeAll(async () => {
  app = createApp();
  await database.initialize();
});

afterAll(async () => {
  await database.query('SET FOREIGN_KEY_CHECKS=0');
  await database.query('TRUNCATE users');
  await database.query('SET FOREIGN_KEY_CHECKS=1');
  await database.destroy();
});

test("SUCCESS: kakao login", async () => {
  axios.get = jest.fn().mockReturnValue({
    data: {
      id: 1010101022
    }
  });

  const result = await request(app)
    .post("/users/login")
    .set({
      Authorization: "kakaoToken"
    });
    console.log(result.body)
    expect(result.status).toEqual(201)
});

test("FAILED: kakaoToken not exist", async () => {
  axios.get = jest.fn().mockReturnValue({
    data: {
      id: 1010101022
    },
  });

  await request(app)
  .post("/users/login")
  .expect(400);
});
});