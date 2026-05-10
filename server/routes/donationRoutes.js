const express = require("express");

const router = express.Router();

const Donation = require("../models/Donation");

router.post("/", async (req, res) => {
  try {
    const { amount, monthly, message } = req.body;

    const donation = await Donation.create({
      amount,
      monthly,
      message,
    });

    res.status(201).json({
      success: true,
      donation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      donations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
module.exports = router;