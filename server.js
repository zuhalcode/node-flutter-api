const express = require("express");
const cors = require("cors");
const app = express();

// db connection
require("./src/config/db");

// user routes
const authRoutes = require("./src/routes/auth");
const categoryRoutes = require("./src/routes/categories");
const productRoutes = require("./src/routes/products");

// set post and listen for our request
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Backend-framework is running on port ${PORT}`));

app.use("/api", [authRoutes, categoryRoutes, productRoutes]);
