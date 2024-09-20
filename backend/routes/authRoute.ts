import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import employeeModel from "../models/employee";
import adminModel from "../models/admin";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ msg: "Please provide both username and password." });
    }

    // Check if the user is an employee or admin
    let user = await employeeModel.findOne({ username });
    let role = "employee";

    if (!user) {
      user = await adminModel.findOne({ username });
      role = "admin"; // Set role to admin if found in the admin model
    }

    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }

    // Compare password
    if (!user.password) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    // Generate JWT token with role and id
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(500).json({ msg: "JWT secret is not defined." });
    }

    const token = jwt.sign({ userId: user._id, role }, secret);

    // Remove password from the user object before sending response
    const userObj = user.toObject();
    delete userObj.password;

    res.status(200).json({ token, userObj });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
