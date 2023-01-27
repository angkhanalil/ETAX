require("dotenv").config();
const express = require("express");
// var MongoClient = require("mongodb");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const OrderRoutes = require("./routes/OrderRoutes");
const EtaxRoutes = require("./routes/EtaxDocRoutes");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/api/order", OrderRoutes);
app.use("/api/downlaod", EtaxRoutes);

// app.use(express.static(path.join(__dirname, "../frontend/build")));
//build
// app.use(express.static(path.resolve(__dirname, "../frontend/build")));
// app.get("/*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
// });

// 404 Error
app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
