const express = require("express");
const router = express.Router();

const authController = require("../controllers/AuthController");

// token auth
const { verifyToken, isAdmin } = require("../middleware/auth");

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.post("/auth/logout", verifyToken, authController.logout);

router.post("/auth/migrate", [verifyToken, isAdmin], async (req, res) => {
  await User.remove();
  return res.status(200).json({
    status: "Migrate Success",
  });
});

module.exports = router;
