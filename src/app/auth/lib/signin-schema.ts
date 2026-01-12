import { z } from "zod";

export const schema = z.object({
  email: z.email().trim().min(1).max(255),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(255)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/, {
      message:
        "Password must be at least 8 characters long, contain at least one letter, one number, and one special character",
    }),
});

type SignInData = z.infer<typeof schema>;

export type { SignInData };
