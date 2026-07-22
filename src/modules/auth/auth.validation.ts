import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3),
  email: z.email(),
  phoneNumber: z.string().min(10),
  password: z.string().min(8),
});