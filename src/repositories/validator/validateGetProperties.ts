import {
  getPropertiesSchema,
  GetPropertiesResponse,
} from "@/type/response/getProperties";

export const validateGetProperties = (data: unknown): GetPropertiesResponse => {
  const parsed = getPropertiesSchema.parse(data);
  return parsed;
};
