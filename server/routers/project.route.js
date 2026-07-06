import express, { Router } from 'express';
import { createProject, deleteProject, getProject, getProjectById, updateProject } from '../controllers/project.controller.js';
import { validate } from '../middleware/validate.js';
import { projectSchema } from '../validators/project.validator.js';
import { authMiddleware } from '../middleware/auth.middleware.js';


export const projectRouter = express.Router();

projectRouter.get("/", getProject)
projectRouter.get("/:id", getProjectById)
projectRouter.post("/", validate(projectSchema), authMiddleware, createProject)
projectRouter.put("/:id", authMiddleware, updateProject)
projectRouter.delete("/:id", authMiddleware, deleteProject)