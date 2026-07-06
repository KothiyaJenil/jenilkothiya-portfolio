import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, { message: "username must be at least 3 characters long" })
    .max(20, { message: "username must be at most 20 characters long" }),
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "email is invalid" }) 
    .trim(),
  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "password must be at least 6 characters long" })
    .max(100, { message: "password must be at most 100 characters long" })
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required", })
    .trim()
    .email({ message: "email is invalid" }),
  password: z
    .string({ required_error: "Password is required", })
    .min(1, { message: "Password is required" }),
});
