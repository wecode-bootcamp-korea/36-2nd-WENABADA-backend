const request = require("supertest");
const { createApp } = require("../app");
const { database } = require("../models/database");

describe("/products/recommend/list", () => {
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
        .get("/products/recommend/list")
        .set('authorization', process.env.TOKEN)
        .expect(200)
        .expect({ "productRecommendList": [
            {
                "id": 34,
                "name": "구찌 리미티드 에디션 하의 팝니다",
                "price": "550000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbi5IjA%2FbtrKSf6wo19%2FMBWcNerQJM5OQQOS4uSsCK%2Fimg.jpg",
                "created_at": "2022-9-2 18:49:35",
                "user_id": 1
            },
            {
                "id": 35,
                "name": "진청색 바지 팔아요",
                "price": "60000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmZQkk%2FbtrKUj1g8j8%2FsSfra39iJX3WPA4KQzcbzk%2Fimg.jpg",
                "created_at": "2022-9-2 18:49:35",
                "user_id": 2
            },
            {
                "id": 36,
                "name": "개구리무늬 운동복 팝니다",
                "price": "45000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbVhQBd%2FbtrKOInIPK9%2FykPeQmDeRijeQkhk8FUo4k%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 3
            },
            {
                "id": 37,
                "name": "여성 일상생활용 하의 팔아요",
                "price": "7700.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDbXGP%2FbtrKToPGLUb%2Fy5E0ISEkBhktKD5hTGnGmk%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 4
            },
            {
                "id": 38,
                "name": "여성용 운동복 팝니다 (하늘색)",
                "price": "14000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbc0JnL%2FbtrKMndekZp%2FPfTFMHvYmKp5s14SxAJ12k%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 5
            },
            {
                "id": 39,
                "name": "청바지 팔아요",
                "price": "8000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdcJ20q%2FbtrKOhKs844%2FOQJkWOcsxdaPQOhDz08e41%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 6
            },
            {
                "id": 40,
                "name": "남성용 카키색 바지 팔아요~~",
                "price": "69000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblqYeh%2FbtrKU61Ach1%2F7LA7RKMT4JzwIkT5LPGDYK%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 7
            },
            {
                "id": 41,
                "name": "회색 운동복(일상생활용) 팝니다",
                "price": "12300.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblqYeh%2FbtrKU61Ach1%2F7LA7RKMT4JzwIkT5LPGDYK%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 8
            },
            {
                "id": 42,
                "name": "여성용 주황색 바지 팝니다 (샤넬 리미티드 에디션)",
                "price": "77000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkSwc0%2FbtrKLfsPFDE%2FZWw2u1vIZqUkgHl4Ow1Hn1%2Fimg.jpg",
                "created_at": "2022-9-2 18:50:52",
                "user_id": 9
            },
            {
                "id": 43,
                "name": "적색 골댕바지 팔아요",
                "price": "65000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbw2q6f%2FbtrKSLEdPJV%2F2Ctebkb4fIjB23HbKNi281%2Fimg.jpg",
                "created_at": "2022-9-2 18:49:36",
                "user_id": 10
            },
            {
                "id": 44,
                "name": "검은색 바지 팔아봐요",
                "price": "29000.00",
                "image_url": "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLSZpC%2FbtrK49YeTST%2FwbeibqfYDKxCMXrdSEGfk0%2Fimg.jpg",
                "created_at": "2022-9-2 18:49:36",
                "user_id": 10
            }
        ] });
    });
});