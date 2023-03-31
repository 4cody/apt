import express from "express";
import User from "../models/user.js";
import Property from "../models/property.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import auth from "../utils/auth.js";

const router = express.Router();

router.get("/my-properties", auth, async (req, res) => {
  try {
    const properties = await Property.find({ owner: req.user._id });

    res.status = 200;
    res.json({ user: req.user, properties });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    // Send response
    res.status = 200;
    res.json({ user: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Check if password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Send response
    res.status = 200;
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// router.get("/:userEmail", async (req, res) => {
//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       res.status = 400;
//       res.end("No user exists with this email");
//     }

//     res.status = 200;
//     res.json({ user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

export default router;
