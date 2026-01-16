import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Workspace name is required")
    .max(255, "Workspace name is too long"),
  slug: z
    .string()
    .trim()
    .min(3)
    .max(100)
    .regex(/^[a-z0-9-]+$/, "Slug must be URL-safe"),
  description: z.string().trim().max(1000).optional(),
});

type NewWorkspaceData = z.infer<typeof schema>;

export type { NewWorkspaceData };
