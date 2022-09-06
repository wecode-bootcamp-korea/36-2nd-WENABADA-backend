const request = require("supertest");
const { createApp } = require("../app");
const { database } = require("../models/database");

describe("patch /products/recent/watch/list", () => {
    let app;
    beforeAll(async () => {
        app = createApp();
        await database.initialize();
    });

    afterAll(async () => {
        await database.destroy();
    });

    test("SUCCESS: patch request", async () => {
        await request(app)
        .patch("/products/recent/watch/list")
        .set('authorization', process.env.TOKEN)
        .send({ "productId" : 34 })
        .expect(201)
        .expect({ message: "product_updated" });
    });

    test("FAILED: KEY_ERROR", async () => {
        await request(app)
        .patch("/products/recent/watch/list")
        .set('authorization', process.env.TOKEN)
        .send({ "productId" : "" })
        .expect(400)
        .expect({ message: "KEY_ERROR" });
    });
});