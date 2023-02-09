import HttpClient from "@/infrastructure/HttpClient";
import { GetPropertiesResponse } from "../type/response/getProperties";
import { validateGetProperties } from "./validator/validateGetProperties";

const httpClient = new HttpClient({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
});

const getProperties = async (): Promise<GetPropertiesResponse> => {
  let data: unknown;
  try {
    await httpClient
      .request<GetPropertiesResponse>({
        url: `properties`,
      })
      .then((res) => {
        data = res.data;
      });
  } catch (e) {
    console.error(e);
  }

  let parsed: GetPropertiesResponse;
  try {
    parsed = validateGetProperties(data);
  } catch (e) {
    console.error(e);
  }

  return parsed;
};

export default getProperties;
