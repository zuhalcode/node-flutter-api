const express = require("express");
const router = express.Router();

const authController = require("../controllers/AuthController");

// token auth
const verifyToken = require("../middleware/verifyToken");

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.post("/auth/logout", verifyToken, authController.logout);

module.exports = router;
