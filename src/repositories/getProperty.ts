import HttpClient from "@/infrastructure/HttpClient";
import { GetPropertiesResponse } from "../type/response/getProperties";
import { validateGetProperties } from "./validator/validateGetProperties";
import { GetPropertyResponse } from "@/type/response/getProperty";
import { validateGetProperty } from "./validator/validateGetProperty";

const httpClient = new HttpClient({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
});

const getProperty = async (url: string): Promise<GetPropertyResponse> => {
  let data: unknown;
  try {
    await httpClient
      .request<GetPropertyResponse>({
        url: url,
      })
      .then((res) => {
        data = res.data;
      });
  } catch (e) {
    console.error(e);
    throw new Error("エラーが発生しました");
  }

  let parsed: GetPropertyResponse;
  try {
    parsed = validateGetProperty(data);
  } catch (e) {
    console.error(e);
    throw new Error("エラーが発生しました");
  }

  return parsed;
};

export default getProperty;
