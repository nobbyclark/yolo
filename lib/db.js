const mysql = require("serverless-mysql");

const db = mysql({
  config: {
    host: process.env.mySqlHost,
    database: process.env.mySqlDatabase,
    user: process.env.mySqlUser,
    password: process.env.mySqlPassword,
    port: process.env.mySqlPort
  }
});

exports.connect = async () => {
  try {
    await db.connect();
  } catch (err) {
    console.log(err);
  }
};

exports.query = async query => {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
};
