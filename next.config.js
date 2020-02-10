require("dotenv").config();

module.exports = {
  env: {
    datoCmsUrl: process.env.DATO_CMS_URL,
    datoCmsToken: process.env.DATO_CMS_TOKEN,
    mySqlHost: process.env.MYSQL_HOST,
    mySqlDatabase: process.env.MYSQL_DATABASE,
    mySqlUser: process.env.MYSQL_USER,
    mySqlPassword: process.env.MYSQL_PASSWORD,
    mySqlPort: process.env.MYSQL_PORT
  }
};
