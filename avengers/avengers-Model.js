const db = require("../database/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

// this should resolve to the new avenger
async function insert(avenger) {
  return db("avengers")
    .insert(avenger)
    .then(ids => {
      return db("avengers")
        .where({ id: ids[0] })
        .first();
    });
}

async function update(id, changes) {
  return db("avengers")
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}

function remove(id) {
  return db("avengers")
    .where({ id })
    .del();
}

function getAll() {
  return db("avengers");
}

function findById(id) {
  return db("avengers")
    .where({ id })
    .first();
}
