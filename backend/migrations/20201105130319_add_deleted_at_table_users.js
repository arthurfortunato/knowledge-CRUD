const { table } = require("../config/db");

exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', table => {
    table.timestamp('deletedAt')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('users', table => {
    table.drompColumn('deletedAt')
  })
};
