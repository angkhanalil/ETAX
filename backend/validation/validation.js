"use strict";
const { body, check, validationResult, oneOf } = require("express-validator");
//https://github.com/jayeshchoudhary/express-validator-example

const inputValidation = [
  body("inv_year").not().isEmpty().withMessage("Year of Order is required"),

  oneOf([
    body("orderno").not().isEmpty().withMessage("Order Number is required"),
    body("invoice").not().isEmpty().withMessage("Invoice No. is required"),
  ]),
];

module.exports = {
  inputValidation,
};
