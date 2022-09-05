const request = require("supertest");
const { createApp } = require("../app");
const { database } = require("../models/database");

describe("/products/random/list", () => {
    let app;
    beforeAll(async () => {
        app = createApp();
        await database.initialize();
    });

    afterAll(async () => {
        await database.destroy();
    });

    test("SUCCESS: get request", async () => {
        await request(app)
        .get("/products/random/list")
        .expect(200)
    });
});