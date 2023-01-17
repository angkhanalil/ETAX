"use strict";
const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");
const logDir = "log";
require("dotenv").config();
require("winston-mongodb").MongoDB;
//Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const filename = path.join(logDir, "results.log");

const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.errors({ stack: true }),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.ms(),
    format.json()
    // format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename }),
    new transports.MongoDB({
      level: "info",
      db: process.env.MONGODB_SRV,

      options: {
        useUnifiedTopology: true,
      },
      collection: "meta",
      capped: true,
      metaKey: "meta",
    }),
  ],
});

module.exports = logger;
