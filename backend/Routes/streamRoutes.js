const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verifyFirebaseToken } = require("../Middleware/Middleware");

router.post("/stream-token", verifyFirebaseToken, (req, res) => {
  const { videoId } = req.body;

  if (!videoId) {
    return res.status(400).json({ message: "videoId is required" });
  }

  // Create the stream token
  const userId = req.user.uid; // Firebase UID from decoded token

  // Define the payload for the stream token
  const payload = {
    userId: userId,    // User's Firebase UID
    videoId: videoId,  // Video ID being requested
    exp: Math.floor(Date.now() / 1000) + 180  // 180 seconds expiry
  };

  // Generate JWT token
  const streamToken = jwt.sign(payload, process.env.JWT_SECRET);

  // Send the token as the response
  res.json({ streamToken });
});

module.exports = router;