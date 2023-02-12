import HttpClient from "@/infrastructure/HttpClient";
import { PostPropertyRequest } from "@/type/request/postProperty";
import { GetPropertyResponse } from "@/type/response/getProperty";

const httpClient = new HttpClient({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
});

const postProperty = async (
  req: PostPropertyRequest
): Promise<{
  property: GetPropertyResponse;
  status: number;
  message: null;
}> => {
  let data: any;
  try {
    await httpClient
      .request<GetPropertyResponse>({
        method: "post",
        url: `properties`,
        params: {
          name: req.name,
          description: req.description,
          is_purchasable: req.isPurchasable,
          rental_period: req.rentalPeriod,
          price: req.price,
        },
      })
      .then((res) => {
        console.log(res);
        data = res.data;
      });
  } catch (e) {
    // TODO: エラーハンドリング用の関数作成
    console.error(e);
    throw new Error("エラーが発生しました");
  }

  return data;
};

export default postProperty;
