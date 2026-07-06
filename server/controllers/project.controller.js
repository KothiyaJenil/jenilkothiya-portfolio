import express from "express";
import Project from "../models/project.model.js";

export const projectRouter = express.Router();

export const createProject = async (req, res) => {
  try {
    const { title } = req.body;
    const projectExists = await Project.findOne({ title });

    if (projectExists) {
      return res
        .status(400)
        .json({ success: true, message: "Project already added" });
    }
    const project = await Project.create(req.body);
    res
      .status(200)
      .json({ success: true, message: "Project added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Project not added successfully",
        error: error.message,
      });
  }
};

export const getProject = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    if (!projects) {
      res.status(400).json({ success: false, message: "projects not found" });
    }

    res
      .status(200)
      .json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    const project = await Project.findOne({ slug: id });
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



export const updateProject = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findOneAndUpdate({ slug: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      res
        .status(500)
        .json({
          success: false,
          message: "Project not found",
          error: error.message,
        });
    }
    res
      .status(200)
      .json({ success: true, message: "Project Updated Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};




















export const deleteProject = async (req, res) => {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    const project = await Project.findOneAndDelete({ slug: id });
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Project Deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
