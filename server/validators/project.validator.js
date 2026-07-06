import { z } from "zod";

export const projectSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  slug: z
    .string()
    .min(3, "Slug is required"),

  descriptions: z
    .string()
    .min(20, "Description is too short"),

  technologies: z
    .array(z.string())
    .min(1, "Add at least one technology"),

  githubUrl: z
    .string()
    .url("Invalid GitHub URL")
    .optional(),

  liveUrl: z
    .string()
    .url("Invalid Live URL")
    .optional(),

  status: z
    .enum(["Published", "Draft"])
    .optional(),
});