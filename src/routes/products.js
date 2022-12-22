const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductController");

// token auth
const { verifyToken, isAdmin } = require("../middleware/auth");

router.get("/products", productController.index);
router.post("/products/create", [verifyToken, isAdmin], productController.create);
router.put("/products/:id", [verifyToken, isAdmin], productController.edit);
router.delete("/products/:id", [verifyToken, isAdmin], productController.delete);
router.get("/products/:category", productController.sort);

router.post("/products/migrate", [verifyToken, isAdmin], async (req, res) => {
  await Product.remove();
  return res.status(200).json({
    status: "Migrate Success",
  });
});

module.exports = router;
