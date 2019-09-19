const request = require("supertest");

const server = require("./server.js");

const db = require("../database/dbConfig.js");

describe("the server", () => {
  beforeEach(async () => {
    await db("avengers").truncate();
  });

  describe("GET /", () => {
    it("should run the testing env", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    it("should return status 200", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return the correct object", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toEqual("application/json");
          expect(res.body).toEqual({ api: "up" });
        });
    });
  });

  describe("GET /avengers", () => {
    it("should return list of avengers", () => {
      return request(server)
        .get("/avengers")
        .then(res => {
          expect(res.status).toBe(200);
          expect(res.type).toBe("application/json");
          expect(res.body.length).toBe(0);
        });
    });
  });
});
