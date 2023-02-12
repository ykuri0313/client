import { z } from "zod";
import { propertySchema } from "./common/property";

export type GetPropertyResponse = z.infer<typeof propertySchema>;
