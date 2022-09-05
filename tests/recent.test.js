const request = require("supertest");
const { createApp } = require("../app");
const { database } = require("../models/database");

describe("/products/recent/watch/list", () => {
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
        .get("/products/recent/watch/list")
        .set('authorization', process.env.TOKEN)
        .expect(200)
        .expect({ "productRecentWatchList": [
            {
                "id": 34,
                "name": "구찌 리미티드 에디션 하의 팝니다",
                "price": "550000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbi5IjA%2FbtrKSf6wo19%2FMBWcNerQJM5OQQOS4uSsCK%2Fimg.jpg",
                "created_at": "2022-9-2 18:49:35",
                "user_id": 1
            }
        ] });
    });
});