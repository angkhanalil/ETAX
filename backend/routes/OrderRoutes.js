const express = require("express");
const router = express.Router();
const { getOrder, getOrderforEtax } = require("../controller/OrderController");

router.get("/", getOrder);
router.get("/order", getOrderforEtax);

// router.get("/:order", (req, res) => {});

module.exports = router;
