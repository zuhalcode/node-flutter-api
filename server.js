const express = require("express");
const cors = require("cors");
const app = express();

const multer = require("multer");
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "productImages"),
  filename: (req, file, cb) => cb(null, `${new Date().getTime() - file.originalname}`),
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpg") cb(null, true);
  else cb(null, false);
};

// socket io connection
let http = require("http");
let server = http.createServer(app);

// db connection
require("./src/config/db");

// user routes
const authRoutes = require("./src/routes/auth");
const cartRoutes = require("./src/routes/cart");
const categoryRoutes = require("./src/routes/categories");
const productRoutes = require("./src/routes/products");

// set post and listen for our request
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"));

// api routes
app.use("/api", [authRoutes, categoryRoutes, productRoutes, cartRoutes]);

// start server
server.listen(PORT, "0.0.0.0", () => console.log(`Backend-framework is running on port ${PORT}`));
