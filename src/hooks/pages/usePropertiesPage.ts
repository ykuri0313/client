import React, { useEffect, useState } from "react";
import useSWR from "swr";
import getProperties from "../../repositories/getProperties";
import toPropertyList from "@/toViewModel/toPropertyList";
import { Property } from "@/type/viewModel/common/property";
import { useRouter } from "next/router";

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

type PropertyState = INIT | LOADING | LOADED | ERROR;

type HookState = {
  propertyState: PropertyState;
  toPropertyDetail: (propertyId: number) => void;
};

const usePropertiesPage = (): HookState => {
  const [propertyState, setPropertyState] = useState<PropertyState>(undefined);
  const router = useRouter();
  const { data, error } = useSWR("properties", getProperties);

  useEffect(() => {
    if (!data) {
      setPropertyState({
        status: "loading",
      });
    }
    if (error) {
      console.error(error);
      setPropertyState({
        status: "error",
        info: error,
      });
    }
    if (data) {
      setPropertyState({
        status: "loaded",
        data: toPropertyList(data),
      });
    }
  }, [data]);

  const toPropertyDetail = (propertyId: number) => {
    router.push({
      pathname: "/properties/show",
      query: { propertyId: propertyId },
    });
  };

  return {
    propertyState,
    toPropertyDetail,
  };
};

export default usePropertiesPage;
