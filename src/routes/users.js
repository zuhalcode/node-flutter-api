const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.post("/users", userController.createUser);

// router.post("/users", (req, res, next) => {
//   console.clear();
//   res.json({ name: "zuhal" });
//   next();
// });

router.get("/users", (req, res, next) => {
  console.clear();
  res.json({ name: "zuhal" });
  next();
});

router.put("/users", (req, res, next) => {
  console.clear();
  res.json({ name: "zuhal" });
  next();
});

router.delete("/users", (req, res, next) => {
  console.clear();
  res.json({ name: "zuhal" });
  next();
});

module.exports = router;
