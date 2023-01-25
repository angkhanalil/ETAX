"use strict";
const logger = require("../../logger");
const FormData = require("form-data");
// const https = require("https");
const axios = require("axios");
require("dotenv").config();

const downLoadInvoice = async (req, res) => {
  var form = new FormData();
  form.append("SellerTaxId", process.env.SELLER_TAX_ID);
  form.append("SellerBranchId", process.env.SELLER_BRANCH_ID);
  form.append("UserCode", process.env.USER_CODE);
  form.append("AccessKey", process.env.ACCESS_KEY);
  form.append("APIKey", process.env.API_KEY);
  form.append("InvoiceNumber", req.body.invoice);
  form.append("InvoiceDate", req.body.invoicedate);
  // console.log(req.body);
  // console.log(req.body.invoicedate);
  axios({
    method: "post",
    url: process.env.ETAX_URL,
    data: form,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: process.env.ACCCESS_ID,
    },
  })
    .then(function (response) {
      //handle success
      //console.log(response);
      logger.info("INET Response : Success ");
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      //handle error
      logger.error("inet Response : ", {
        meta: error.message,
      });
      console.log(error.message);
    });
};

module.exports = {
  downLoadInvoice,
};
