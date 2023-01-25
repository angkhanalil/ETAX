"use strict";
const { body, check, validationResult, oneOf } = require("express-validator");
//https://github.com/jayeshchoudhary/express-validator-example
//.matches("/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/")
const inputValidation = [
  body("inv_year").not().isEmpty().withMessage("Year of Order is required"),

  oneOf([
    body("orderno")
      .not()
      .isEmpty()
      .trim()
      .escape()

      .withMessage("Order Number is required"),
    body("invoice")
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage("Invoice No. is required"),
  ]),
];

module.exports = {
  inputValidation,
};
