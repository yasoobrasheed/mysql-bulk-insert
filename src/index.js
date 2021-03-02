const { bulkInsertFillerData } = require("./insert/bulkInsertFillerData");

bulkInsertFillerData({
  schema: "bulk_schema",
  table: "bulk_table",
  fillerObject: {
    uuid: "AAAA_AAAA_AAAA_AAAA",
    name: "Aaaaa Aaaaa",
    age: 99,
    is_customer: true,
    email: "AaaaaAaaaa@Aaaaa.com",
    phone_number: "(AAA) AAA-AAAA"
  },
  amount: 1000000,
  batchSize: 500,
  resetId: true
});

module.exports = {};