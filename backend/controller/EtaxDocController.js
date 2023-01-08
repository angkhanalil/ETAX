const logger = require("../../logger");

const downLoadInvoice = async (req, res) => {
  res.status(200).json({ downlaod: "success" });
};

module.exports = {
  downLoadInvoice,
};
