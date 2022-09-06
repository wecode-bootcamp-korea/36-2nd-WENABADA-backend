const request = require("supertest");
const { createApp } = require("../app");
const { database } = require("../models/database");

describe("/products/like/number", () => {
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
        .get("/products/like/number")
        .set('authorization', process.env.TOKEN)
        .expect(200)
        .expect({ "productlikeNumber": [
            {
                "count": "0"
            }
        ] });
    });

    test("FAILED: URL ERROR", async () => {
        await request(app)
        .get("/products/like/numbe")
        .set('authorization', process.env.TOKEN)
        .expect(404)
        .expect({});
    });
});