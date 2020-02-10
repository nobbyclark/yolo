const db = require("../../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
  await db.connect();

  const customers = await db.query(escape`
      SELECT TOP (10) * FROM [SalesLT].[Customer]
    `);

  console.log(customers);

  res.status(200).json({ customers });
};
