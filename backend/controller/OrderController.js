"use strict";

const sqlConfig = require("../config/db");
const sql = require("mssql");
const logger = require("../../logger");
const { validationResult } = require("express-validator");

const getYearInvoice = async (req, res) => {
  try {
    let result = [];

    const today = new Date();
    const year = today.getFullYear();
    const lyear = year - 1;
    result.push(year);
    result.push(lyear);
    res.status(200).json({ year: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
    //console.log(error.message);
    logger.error("getYearInvoice response : ", {
      meta: error.message,
    });
  }
};

const getOrder = async (req, res) => {
  try {
    //logger.info("getOrder e-tax invoice req : ", { meta: req.body });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    } else {
      await sql.connect(sqlConfig);
      let raw_query = `SELECT BILL_NO,DOCUMENT_NAME,DOCUMENT_ID,DOCUMENT_ISSUE_DTM,BUYER_ORDER_ASSIGN_ID 
                          FROM ETAX_DOCUMENT_HEADER  where   year([DOCUMENT_ISSUE_DTM]) = '${req.body.inv_year}'    
                          `;

      if (!req.body.orderno == "") {
        raw_query =
          raw_query +
          `  AND   BUYER_ORDER_ASSIGN_ID = '${req.body.orderno}'   `;
      }
      if (!req.body.invoice == "") {
        raw_query = raw_query + ` AND  BILL_NO = '${req.body.invoice}' `;
      }
      //https://www.stackhawk.com/blog/node-js-sql-injection-guide-examples-and-prevention/
      //let order = 635436098388582'${req.body.orderno}'
      await sql.query(raw_query, (err, result) => {
        if (err !== null) {
          logger.error("getOrder e-tax invoice response : ", {
            meta: err.message,
          });
          //console.log("err ", err);
          res.status(400).json({ message: err.message });
        } else {
          //console.log(result.recordsets[0]);
          logger.info("getOrder e-tax invoice response : ", {
            meta: result.recordsets[0],
          });
          res.status(200).json(result.recordsets[0]);
        }
      });

      //sql.query(raw_query);
      // res.status(200).json(order.recordsets[0]);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    //console.log(error.message);
    logger.error("getOrder e-tax invoice response : ", { meta: error.message });
  }
};

const getOrderforEtax = async (req, res, next) => {
  try {
    logger.info("body", { meta: req.body });
    // console.log(req.socket.remoteAddress);
    // console.log(req.ip);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
    logger.error({ message: error.message });
  }
};

module.exports = {
  getOrder,
  getOrderforEtax,
  getYearInvoice,
};
