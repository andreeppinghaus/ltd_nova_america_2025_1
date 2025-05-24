import { z } from "zod";

export const Unit = z.object({
  id: z.number(),
  name: z.string(),
});

export type Unit = z.infer<typeof Unit>;
