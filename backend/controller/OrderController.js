const Order = require("../models/Order");
const sqlConfig = require("../config/db");
const sql = require("mssql");

const getOrder = async (req, res) => {
  try {
    await sql.connect(sqlConfig);

    let order = await sql.query("SELECT * FROM ORDER_INV");

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
