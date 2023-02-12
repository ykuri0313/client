import { z } from "zod";

export const propertySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  is_purchasable: z.boolean(),
  rental_period: z.number(),
  price: z.number(),
  status: z.string(),
  image_url: z.union([z.string(), z.null()]),
});
