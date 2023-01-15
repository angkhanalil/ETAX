const { body, check, validationResult } = require("express-validator");
//https://github.com/jayeshchoudhary/express-validator-example

const inputValidation = [
  body("pono").not().isEmpty().withMessage("PO Number is required"),
];

module.exports = {
  inputValidation,
};
