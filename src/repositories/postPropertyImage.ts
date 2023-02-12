import HttpClient from "@/infrastructure/HttpClient";

const httpClient = new HttpClient({
  baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
});

const postProperty = async (
  propertyId: string | string[] | undefined,
  formData: FormData
): Promise<{
  status: number;
  message: null;
}> => {
  let data: any;
  try {
    await httpClient
      .request({
        method: "post",
        url: `properties/attach_image`,
        data: formData,
        params: {
          property_id: propertyId,
        },
      })
      .then((res) => {
        data = res.data;
      });
  } catch (e) {
    console.error(e);
    throw new Error("エラーが発生しました");
  }

  return data;
};

export default postProperty;
