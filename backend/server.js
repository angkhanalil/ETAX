require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const OrderRoutes = require("./routes/OrderRoutes");
app.use(cors());
// app.use(express.json());
app.use("/api/order", OrderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
