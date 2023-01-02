const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "debug",
  //format: format.simple(),
  // You can also comment out the line above and uncomment the line below for JSON format
  //format: format.json(),
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
