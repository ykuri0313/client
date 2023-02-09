import { useState } from "react";
import { SignUpForm } from "@/type/form/signUpForm";
import { useToast } from "@chakra-ui/react";
import firebase from "firebase";

type HookState = {
  onValid: (data: SignUpForm) => void;
  onInValid: (errors: any) => void;
  isLoading: boolean;
};

const useSignUpPage = (): HookState => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const onValid = async (data: SignUpForm) => {
    if (data.password != data.passwordConfirmation) {
      return toast({
        title: "Password does not match.",
        status: "error",
        position: "top-left",
        duration: 5000,
        isClosable: true,
      });
    }

    try {
      setIsLoading(true);
      const auth = firebase.auth();
      const userCredential = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      toast({
        title: "ユーザー登録に成功しました！",
        status: "success",
        position: "top",
      });
    } catch (e) {
      console.log(e);
      toast({
        title: "エラーが発生しました。",
        status: "error",
        position: "top",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onInValid = (errors: any) => {
    console.log(errors);
    toast({
      title: "エラーが発生しました。",
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

export default useSignUpPage;
