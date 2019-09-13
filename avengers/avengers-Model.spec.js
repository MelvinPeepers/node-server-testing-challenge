const Avengers = require("./avengers-Model.js");

const db = require("../database/dbConfig.js");

// setup suite
describe("The Avenger Model", () => {
  beforeEach(async () => {
    await db("avengers").truncate();
  });

  describe("the insert function", () => {
    it("should insert a new avenger", async () => {
      // test setup
      const avengerData = { name: "Captain America" };
      await Avengers.insert(avengerData);

      // assertion
      const avengers = await db("avengers");
      expect(avengers.length).toBe(1);
      expect(avengers[0].name).toBe("Captain America");
    });

    it("should resolve to the newly created avenger", async () => {
      const avengerData = { name: "Captain America" };
      const avenger = await Avengers.insert(avengerData);

      expect(avenger).toEqual({ id: 1, name: "Captain America" });
    });
  });
});
