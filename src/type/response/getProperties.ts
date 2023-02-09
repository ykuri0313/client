import { z } from "zod";
import { propertySchema } from "./common/property";

export const getPropertiesSchema = z.object({
  properties: z.array(propertySchema),
});

export type GetPropertiesResponse = z.infer<typeof getPropertiesSchema>;
