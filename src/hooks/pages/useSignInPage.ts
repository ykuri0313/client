import { useState } from "react";
import { SignInForm } from "@/type/form/signInForm";
import { useToast } from "@chakra-ui/react";
import firebase from "firebase";

type HookState = {
  onValid: (data: SignInForm) => void;
  onInValid: (errors: any) => void;
  isLoading: boolean;
};

const useSignInPage = (): HookState => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();

  const onValid = async (data: SignInForm) => {
    try {
      setIsLoading(true);
      const auth = firebase.auth();
      const userCredential = await auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      toast({
        title: "サインインに成功しました！",
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

export default useSignInPage;
