const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const donationRoutes = require("./routes/donationRoutes");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes =require("./routes/paymentRoutes");


const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/donations", donationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FutureForge API Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});