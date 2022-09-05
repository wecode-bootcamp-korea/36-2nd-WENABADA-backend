const request = require("supertest");
const { createApp } = require("../app");
const { database } = require("../models/database");

describe("/products/search/list", () => {
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
        .get(encodeURI("/products/search/list?search=맥북"))
        .expect(200)
        .expect({ "productSearchList": [
            {
                "id": 50,
                "name": "맥북 팝니다",
                "price": "1230000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Flpjml%2FbtrKUtQgLOt%2FnaooQJNwkIA1w3xnrUQn00%2Fimg.webp",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 6,
                "address": "서울 서초구 방배동"
            },
            {
                "id": 51,
                "name": "맥북 4세대 팝니다 (마우스 같이 드려요)",
                "price": "1500000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMNVfZ%2FbtrKMFSbyz0%2Fe31WDrfmxwXSZpesheKvhk%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 7,
                "address": "서울 서초구 방배동"
            },
            {
                "id": 45,
                "name": "맥북 에어 팝니다 (실사용 1개월)",
                "price": "880000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfXqpe%2FbtrKMnqOzZ8%2Fpk2ldcQATHKtzQgGmi2FV0%2Fimg.jpg",
                "created_at": "2022-9-2 18:49:36",
                "user_id": 1,
                "address": "경기 안양시 만안구"
            },
            {
                "id": 47,
                "name": "맥북 에어 팔아요 (에플 케어 O)",
                "price": "990000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd03ExO%2FbtrKMFSkIBo%2FLfwTyMwPVEfzOHoBAx4ng1%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 3,
                "address": "경기 수원시 장안구"
            }
        ] });
    });
});