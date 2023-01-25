const express = require("express");
const router = express.Router();
const {
  getOrder,
  getOrderforEtax,
  getYearInvoice,
} = require("../controller/OrderController");

const { inputValidation } = require("../validation/validation");
router.get("/", inputValidation, getOrder);
router.get("/order", getOrderforEtax);
router.get("/year", getYearInvoice);
router.put("/", inputValidation, getOrder);

// router.get("/:order", (req, res) => {});

module.exports = router;
