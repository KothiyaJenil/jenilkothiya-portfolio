import { z } from "zod";

export const profileSchema = z.object({
  phone: z.string({ required_error: "enter phone number" }).trim().length(10),
  GitHub: z.string({ required_error: "enter GitHub URL" }).url().trim(),
  linkedin: z.string({ required_error: "enter linkedin URL" }).url().trim(),
  instagram: z.string({ required_error: "enter instagram URL" }).url().trim(),
  aboutMe: z.string({ required_error: "enter your resume summary" }).min(50).trim(),
  profileImage: z.string({ required_error: "upload your profile image" }),
  technology: z.array(
    z.object({
      language: z.string({ required_error: "enter language name" }).trim(),
      icon: z.string({ required_error: "upload language icon/image" }).trim()
    })),
  educations: z.array(
    z.object({
      degree: z.string({ required_error: "enter your degree" }).trim(),
      institution: z.string({ required_error: "enter your institution name" }).trim(),
      duration: z.string({ required_error: "enter your duration name" }).trim(),
      grade: z.string({ required_error: "enter your grade name" }).trim(),

    })),
  certificateSchema: z.array(
    z.object({
      title: z.string({ required_error: "enter your title" }).trim(),
      description: z.string({ required_error: "enter your description name" }).trim(),
      issuedAt: z.string({ required_error: "enter your issuedAt name" }).trim(),
    }))
});
