import { z } from "zod";

export const schema = z.object({
  email: z.email().trim().min(1).max(255),
});

type ForgotPasswordData = z.infer<typeof schema>;

export type { ForgotPasswordData };
