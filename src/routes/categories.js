const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/CategoryController");

// token auth
const verifyToken = require("../middleware/verifyToken");

router.get("/categories", categoryController.index);
router.post("/categories/create", verifyToken, categoryController.create);
router.get("/categories/show", categoryController.show);

module.exports = router;
