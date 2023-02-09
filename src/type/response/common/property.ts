import { z } from "zod";

export const propertySchema = z.object({
  id: z.number(),
  name: z.string(),
  is_purchasable: z.boolean(),
});
