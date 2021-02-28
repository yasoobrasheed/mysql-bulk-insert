const envs = require("../../knexfile.js");
const Knex = require("knex");

const env = process.env.ENVIRONMENT || "development";
const config = envs[env];
const knex = Knex(config);

module.exports = {
  knex
}; 