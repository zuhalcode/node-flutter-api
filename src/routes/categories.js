const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/CategoryController");

// token auth
const { verifyToken, isAdmin } = require("../middleware/auth");

router.get("/categories", categoryController.index);
router.post("/categories/create", [verifyToken, isAdmin], categoryController.create);
router.get("/categories/:slug", categoryController.show);

module.exports = router;
