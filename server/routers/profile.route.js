import { updateUserProfileDetail, adminProfile, userProfileDetail } from "../controllers/profile.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import express from "express";

export const profileRoute = express.Router();

profileRoute.get("/", authMiddleware, adminProfile);
profileRoute.get("/profileDetails", authMiddleware, userProfileDetail);
profileRoute.put("/editProfileDetails/:id", authMiddleware, updateUserProfileDetail);
