import { z } from "zod";

export const postPropertySchema = z.object({
  name: z.string(),
  description: z.string(),
  isPurchasable: z.boolean(),
  rentalPeriod: z.number(),
  price: z.number(),
});

export type PostPropertyRequest = z.infer<typeof postPropertySchema>;
