require("dotenv").config();
const sql = require("mssql");
const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  //   pool: {
  //     max: 10,
  //     min: 0,
  //     idleTimeoutMillis: 30000,
  //   },
  options: {
    cryptoCredentialsDetails: {
      minVersion: "TLSv1",
    },
    encrypt: false, // for azure
    // // trustServerCertificate: false, // change to true for local dev / self-signed certs
    trustedconnection: true,
    enableArithAbort: true,
  },
};
module.exports = sqlConfig;
