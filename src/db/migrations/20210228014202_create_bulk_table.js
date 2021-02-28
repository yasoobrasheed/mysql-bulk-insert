exports.up = async function(knex) {
  await knex.schema.createTable("bulk_table", (table) => {
    table.increments("id");
    table.string("uuid");
    table.string("name");
    table.integer("age");
    table.boolean("is_customer");
    table.string("email");
    table.string("phone_number");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("bulk_table");
};
