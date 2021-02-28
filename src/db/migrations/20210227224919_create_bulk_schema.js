exports.up = async function(knex) {
  await knex.schema.raw("CREATE SCHEMA bulk_schema;");
};

exports.down = async function(knex) {
  await knex.schema.raw("DROP SCHEMA bulk_schema;");
};
