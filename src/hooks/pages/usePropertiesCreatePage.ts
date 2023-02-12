import { PropertyCreateForm } from "@/type/form/propertyCreateForm";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import useSWR from "swr";
import postProperty from "../../repositories/postProperty";
import { useRouter } from "next/router";

type HookState = {
  onValid: (data: PropertyCreateForm) => void;
  onInValid: (errors: any) => void;
  isLoading: boolean;
};

const usePropertiesCreatePage = (): HookState => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();

  const onValid = (req: PropertyCreateForm) => {
    console.log(req);
    postProperty(req)
      .then((res) => {
        toast({
          title: "商品情報の登録が完了しました。",
          status: "success",
          position: "top",
        });
        router.push({
          pathname: "/properties/attach_image",
          query: { propertyId: res.property.id },
        });
      })
      .catch((e) => {
        console.log(e);
        toast({
          title:
            "サーバーエラーが発生しました。大変恐れ入りますが、y.kurihara.renta@gmail.comまでご連絡下さい。",
          status: "error",
          position: "top",
        });
      });
  };

  const onInValid = (errors: any) => {
    console.log(errors);
    toast({
      title: "エラーが発生しました。入力内容をご確認下さい",
      status: "error",
      position: "top",
    });
  };

  return {
    onValid,
    onInValid,
    isLoading,
  };
};

export default usePropertiesCreatePage;
