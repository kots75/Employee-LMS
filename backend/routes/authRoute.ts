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

    const user =
      (await employeeModel.findOne({ username })) ||
      (await adminModel.findOne({ username }));

    if (!user) {
      return res.status(400).json({ msg: "User does not exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(500).json({ msg: "JWT secret is not defined." });
    }
    const token = jwt.sign({ id: user._id }, secret);
    delete (user as any).password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
