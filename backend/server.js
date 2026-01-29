const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const connectDB = require("./Config/db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);