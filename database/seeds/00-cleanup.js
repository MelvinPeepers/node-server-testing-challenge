const cleaner = require("knex-cleaner");

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    // add this line
    mode: "truncate",
    ignoreTables: ["knex_migration", "knex_migrations_lock"]
  });
};
