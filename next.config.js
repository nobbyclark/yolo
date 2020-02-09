require('dotenv').config()

module.exports = {
  env: {
    datoCmsUrl: process.env.DATO_CMS_URL,
    datoCmsToken: process.env.DATO_CMS_TOKEN
  }
};
