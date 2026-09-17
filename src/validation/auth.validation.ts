import z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, "Password must contain Minimum 8 Characters long")
    .regex(/[A-Z]/, "Password must contain one Upercase letter")
    .regex(/[a-z]/, "Password must contain one lowercase letter")
    .regex(/[0-9]/, "Password must contain one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain one special Character"),
});
