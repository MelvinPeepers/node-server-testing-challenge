const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

// this should resolve to the new hobbit
async function insert(hobbit) {
  return db("avengers")
    .insert(hobbit)
    .then(ids => {
      return db("avengers")
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("avengers");
}

function findById(id) {
  return null;
}
