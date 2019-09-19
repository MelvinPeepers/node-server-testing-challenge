exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("avengers")
    .truncate()
    .then(function() {
      return knex("avengers").insert([
        { name: "Captain America" },
        { name: "Iron Man" },
        { name: "Black Widow" },
        { name: "Luke Cage" }
      ]);
    });
};
