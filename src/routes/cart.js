const express = require("express");
const router = express.Router();

const cartController = require("../controllers/CartController");

// token auth
const { verifyToken } = require("../middleware/auth");

router.post("/cart/store", verifyToken, cartController.store);

module.exports = router;
