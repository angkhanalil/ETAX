const express = require("express");
const router = express.Router();
const { getOrder } = require("../controller/OrderController");

router.get("/", getOrder);

// router.get("/:order", (req, res) => {});

module.exports = router;
