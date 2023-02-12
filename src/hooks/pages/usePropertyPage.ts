import { useEffect, useState } from "react";
import useSWR from "swr";
import { Property } from "@/type/viewModel/common/property";
import toProperty from "../../toViewModel/toProperty";
import getProperty from "@/repositories/getProperty";

type INIT = undefined;

type LOADING = { status: "loading" };

type LOADED = {
  status: "loaded";
  data: Property;
};

type ERROR = {
  status: "error";
  info: string;
};

type PropertyState = INIT | LOADING | LOADED | ERROR;

type HookState = {
  propertyState: PropertyState;
};

const usePropertyPage = (propertyId: number): HookState => {
  const [propertyState, setPropertyState] = useState<PropertyState>(undefined);
  const { data, error } = useSWR(`properties/${propertyId}`, getProperty);

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
        data: toProperty(data),
      });
    }
  }, [data]);
  
  return {
    propertyState,
  };
};

export default usePropertyPage;
