const request = require("supertest");
const { createApp } = require("../app");
const { database } = require("../models/database");

describe("/category/main", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await database.initialize();
  });

  afterAll(async () => {
    await database.destroy();
  });

  test("SUCCESS: main category get request", async () => {
    await request(app)
      .get("/category/main") 
      .query({firstCategory: 1, pageNo: 1, limit: 1 }) 
      .expect(200) 
  });

  test("FAILED: unexpected main category ", async () => {
    await request(app)
    .get("/category/main") 
    .query({firstCategory: 3, pageNo: 1, limit: 1 }) 
    .expect(400)
    .expect({ message: "List Empty" });
});

test("SUCCESS: main category new list get request", async () => {
  await request(app)
    .get("/category/main/new") 
    .query({firstCategory: 1, pageNo: 1, limit: 1, option: 'desc' }) 
    .expect(200) 
});

test("FAILED: unexpected main category new list", async () => {
  await request(app)
  .get("/category/main/new") 
  .query({firstCategory: 3, pageNo: 1, limit: 1, option: 'desc' }) 
  .expect(400)
  .expect({ message: "List Empty" });
});

  test("SUCCESS: sub category get request", async () => {
    await request(app)
      .get("/category/main/sub") 
      .query({firstCategory: 1, subCategory: 1, pageNo: 1, limit: 1 }) 
      .expect(200) 
  });

    test("FAILED: unexpected sub category ", async () => {
      await request(app)
      .get("/category/main/sub") 
      .query({firstCategory: 1, subCategory: 5, pageNo: 1, limit: 1 }) 
      .expect(400)
      .expect({ message: "List Empty" });
  });

  test("SUCCESS: last category get request", async () => {
    await request(app)
      .get("/category/main/sub/last")
      .query({firstCategory: 1, subCategory: 1, lastCategory: 1, pageNo: 1, limit: 1 }) 
      .expect(200) 
  });

  test("FAILED: unexpected last category ", async () => {
    await request(app)
    .get("/category/main/sub/last") 
    .query({firstCategory: 1, subCategory: 2, lastCategory: 8, pageNo: 1, limit: 1 }) 
    .expect(400)
    .expect({ message: "List Empty" });
});

  // 다음과 같이 본인이 작성한 코드에 맞춰 다양한 케이스를 모두 테스트해야 합니다.
  // 그래야 의도에 맞게 코드가 잘 작성되었는지 테스트 단계에서부터 확인할 수 있습니다!
//   test("SUCCESS: created user", async () => {
//     await request(app)
//       .post("/users/signup")
//       .send({ email: "wecode001@gmail.com", password: "password001@" })
//       .expect(201);
//   });

//   test("FAILED: duplicated email", async () => {
//     await request(app)
//       .post("/users/signup")
//       .send({ email: "wecode001@gmail.com", password: "password001@" })
//       .expect(409)
//       .expect({ message: "duplicated email" });
//   });
});