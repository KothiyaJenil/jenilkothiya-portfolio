import express from "express";
import { registerAdmin, loginAdmin } from "../controllers/auth.controller.js";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.js";

export const authRouter = express.Router();

authRouter.post("/register", validate(registerSchema), registerAdmin);
authRouter.get("/login", validate(loginSchema), loginAdmin);
