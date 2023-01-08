require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
//const http = require("http");
const OrderRoutes = require("./routes/OrderRoutes");
const EtaxRoutes = require("./routes/EtaxDocRoutes");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/order", OrderRoutes);
app.use("/api/downlaod", EtaxRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// 404 Error
app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
