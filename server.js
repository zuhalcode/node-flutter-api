const express = require("express");
const cors = require("cors");
const app = express();

// db connection
const db = require("./src/config/db");

// user routes
const authRoutes = require("./src/routes/api");

// set post and listen for our request
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors handling
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   console.clear();
//   next();
// });

app.listen(PORT, () => console.log(`Node-flutter-api is running on port ${PORT}`));

app.use("/api", authRoutes);
