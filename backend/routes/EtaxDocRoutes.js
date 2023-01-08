const express = require("express");
const router = express.Router();
const { downLoadInvoice } = require("../controller/EtaxDocController");

router.get("/", downLoadInvoice);

module.exports = router;
