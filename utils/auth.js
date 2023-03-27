import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authMiddleware = async (req, res, next) => {
  try {
    // Get JWT token from header
    const token = req.headers.authorization.split(" ")[1];

    // Verify JWT token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID
    const user = await User.findById(decodedToken.userId).select("-password");

    // Check if user exists
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Set user in request object
    req.user = user;

    // Call next middleware function
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

// Export auth middleware function
export default authMiddleware;
