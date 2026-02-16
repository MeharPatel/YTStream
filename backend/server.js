const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./Routes/authRoutes");
const streamRoutes = require("./Routes/streamRoutes");
const connectDB = require("./Config/db");
const { verifyFirebaseToken } = require("./Middleware/Middleware");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

app.get("/api/protected", verifyFirebaseToken, (req, res) => {
    res.json({
        message: "This is a protected route",
        user: req.user,
    });
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api", streamRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);