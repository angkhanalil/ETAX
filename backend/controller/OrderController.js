const Order = require("../models/Order");
const sqlConfig = require("../config/db");
const sql = require("mssql");
const logger = require("../../logger");
const { Console } = require("winston/lib/winston/transports");

const getOrder = async (req, res) => {
  try {
    await sql.connect(sqlConfig);

    let order = await sql.query(
      "SELECT BILL_NO,DOCUMENT_NAME,DOCUMENT_ID,DOCUMENT_ISSUE_DTM,BUYER_ORDER_ASSIGN_ID FROM ETAX_DOCUMENT_HEADER  where  BUYER_ORDER_ASSIGN_ID = '635436098388582'"
    );
    logger.info("getOrder e-tax invoice");
    // logger.debug("Debugging info");
    //https://www.npmjs.com/package/mssql#query-command-callback
    res.status(200).json(order.recordsets[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
    //console.log(error.message);
    logger.error("getOrder e-tax invoice");
  }
};

const getOrderforEtax = async (req, res, next) => {
  try {
    logger.info(req.body);
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
    logger.error({ message: error.message });
  }
};

module.exports = {
  getOrder,
  getOrderforEtax,
};
