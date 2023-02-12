import { useState } from "react";
import postPropertyImage from "@/repositories/postPropertyImage";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";

type HookState = {
  file: File | null;
  onSkipAttachImage: () => void;
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: (propertyId: string | string[] | undefined) => void;
};

const usePropertyImageAttachPage = (): HookState => {
  const [file, setFile] = useState<File | null>(null);
  const router = useRouter();
  const toast = useToast();

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const onClickSubmit = async (propertyId: string | string[] | undefined) => {
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    postPropertyImage(propertyId, formData)
      .then((res) => {
        toast({
          title: "持ち物がマーケットに公開されました！",
          status: "success",
          position: "top",
        });
        router.push("/properties");
      })
      .catch((e) => {
        console.error(e);
        toast({
          title:
            "サーバーエラーが発生しました。大変恐れ入りますが、y.kurihara.renta@gmail.comまでご連絡下さい。",
          status: "error",
          position: "top",
        });
      });
  };

  const onSkipAttachImage = () => {
    toast({
      title:
        "持ち物はクローゼットに下書き保存されました。クローゼットから画像を登録して公開しましょう！",
      status: "success",
      position: "top",
      duration: 10000,
      isClosable: true,
    });
    router.push("/");
  };

  return {
    file,
    onSkipAttachImage,
    onChangeFile,
    onClickSubmit,
  };
};

export default usePropertyImageAttachPage;
