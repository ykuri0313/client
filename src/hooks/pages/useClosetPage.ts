import React, { useEffect, useState } from "react";
import useSWR from "swr";
import toPropertyList from "@/toViewModel/toPropertyList";
import { Property } from "@/type/viewModel/common/property";
import { useRouter } from "next/router";
import getCloset from "@/repositories/getCloset";
import { useToast } from "@chakra-ui/react";

type INIT = undefined;

type LOADING = { status: "loading" };

type LOADED = {
  status: "loaded";
  data: Property[];
};

type ERROR = {
  status: "error";
  info: string;
};

type ClosetState = INIT | LOADING | LOADED | ERROR;

type HookState = {
  closetState: ClosetState;
  toPropertyEdit: (propertyId: number) => void;
};

const useClosetPage = (): HookState => {
  const [closetState, setClosetState] = useState<ClosetState>(undefined);
  const router = useRouter();
  const toast = useToast();
  const { data, error } = useSWR("/api/v1/properties/closet", getCloset);

  useEffect(() => {
    if (!data) {
      setClosetState({
        status: "loading",
      });
    }
    if (error) {
      console.error(error);
      setClosetState({
        status: "error",
        info: error,
      });
    }
    if (data) {
      setClosetState({
        status: "loaded",
        data: toPropertyList(data),
      });
    }
  }, [data]);

  const toPropertyEdit = (propertyId: number) => {
    toast({
      title: "編集機能は目下作成中です。今しばらくお待ちください！",
      status: "warning",
      position: "top",
    });
  };

  return {
    closetState,
    toPropertyEdit,
  };
};

export default useClosetPage;
