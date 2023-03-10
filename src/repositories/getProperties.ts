import HttpClient from "@/infrastructure/HttpClient";
import { GetPropertiesResponse } from "../type/response/getProperties";
import { validateGetProperties } from "./validator/validateGetProperties";

const httpClient = new HttpClient({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
});

const getProperties = async (url: string): Promise<GetPropertiesResponse> => {
  let data: unknown;
  try {
    await httpClient
      .request<GetPropertiesResponse>({
        url: url,
      })
      .then((res) => {
        data = res.data;
      });
  } catch (e) {
    console.error(e);
    throw new Error("エラーが発生しました");
  }

  let parsed: GetPropertiesResponse;
  try {
    parsed = validateGetProperties(data);
  } catch (e) {
    console.error(e);
    throw new Error("エラーが発生しました");
  }

  return parsed;
};

export default getProperties;
