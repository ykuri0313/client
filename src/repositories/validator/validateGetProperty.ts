import { propertySchema } from "../../type/response/common/property";
import { GetPropertyResponse } from "../../type/response/getProperty";

export const validateGetProperty = (data: unknown): GetPropertyResponse => {
  const parsed = propertySchema.parse(data);
  return parsed;
};
