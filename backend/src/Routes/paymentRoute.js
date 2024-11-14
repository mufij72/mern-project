const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../Controller/paymetController");
const router = express.Router();
const { isAuthenticatedUser } = require("../Middalwer/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;