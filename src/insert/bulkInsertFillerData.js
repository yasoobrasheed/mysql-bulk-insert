const { knex } = require("../db/knex.js");

const bulkInsertFillerData = async ({
  schema, 
  table, 
  fillerObject, 
  amount, 
  batchSize = 500, 
  resetId = false
}) => {
  if (resetId) {
    await knex.raw(`ALTER TABLE ${schema}.${table} AUTO_INCREMENT = 1`);
  }
  let batch = [];
  for (let i = 0; i < amount; i++) {
    batch.push(fillerObject);
    if (i % batchSize === 0) {
      await knex(`${table}`).insert(batch);
      batch = [];
    }
  }
  await knex(`${table}`).insert(batch);
  await knex.destroy();
};

module.exports = { bulkInsertFillerData };