import { useToast } from "@chakra-ui/react";
import firebase from "firebase";
import { useRouter } from "next/router";

type HookState = {
  handleSignOut: () => void;
};

const useHeader = (): HookState => {
  const toast = useToast();
  const { push } = useRouter();

  const handleSignOut = async () => {
    try {
      const auth = firebase.auth();
      await auth.signOut();
      toast({
        title: "サインアウトしました",
        status: "success",
        position: "top",
      });
      push("/signin");
    } catch (e) {
      console.error(e);
    }
  };

  return {
    handleSignOut,
  };
};

export default useHeader;
