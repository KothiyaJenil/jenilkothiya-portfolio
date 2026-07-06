import Admin from "../models/admin.model.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export const registerAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });

    if (adminExists) {
      return res.status(400).json({ success: false, message: "Admin already exists" });
    }

    const admin = await Admin.create({ username, email, password });

    res.status(201).json({ success: true, message: "Admin Registered Successfully", admin: { id: admin._id, username: admin.username } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const loginAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ success: false, message: "Invalid Credentials" });
    }

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid Credentials" });
    }

    const token = admin.generateToken();


    res.status(200).json({ success: true, token, admin: { id: admin._id, name: admin.username, email: admin.email } });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
