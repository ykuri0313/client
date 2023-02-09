import React from "react";
import getProperties from "../../repositories/getProperties";
import toPropertyList from "@/toViewModel/toPropertyList";
import { Property } from "@/type/viewModel/common/property";

type HookState = {
  data: Property[];
};

const usePropertiesPage = () => {
  getProperties()
    .then((res) => {
      toPropertyList(res);
    })
    .catch((e) => {
      console.error(e);
    });
};

export default usePropertiesPage;
