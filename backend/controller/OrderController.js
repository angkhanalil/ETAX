const Order = require("../models/Order");
const sqlConfig = require("../config/db");
const sql = require("mssql");
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

const getOrder = async (req, res) => {
  try {
    await sql.connect(sqlConfig);

    let order = await sql.query("SELECT * FROM ORDER_INV");
    logger.info("Hello world");
    logger.debug("Debugging info");
    // const order = await Order.find({});
    //https://www.npmjs.com/package/mssql#query-command-callback
    res.json(order.recordsets[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getOrder,
};
