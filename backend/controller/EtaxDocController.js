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
  form.append("InvoiceNumber", "1642002666");
  form.append("InvoiceDate", "20230106");

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
      res.status(200).json(response.data);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};

module.exports = {
  downLoadInvoice,
};
