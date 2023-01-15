const express = require("express");
const router = express.Router();
const { getOrder, getOrderforEtax } = require("../controller/OrderController");

const { inputValidation } = require("../validation/validation");
router.get("/", inputValidation, getOrder);
router.get("/order", getOrderforEtax);

router.put("/", inputValidation, getOrder);

// router.get("/:order", (req, res) => {});

module.exports = router;
