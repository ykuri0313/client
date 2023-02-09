import { Property } from "@/type/viewModel/common/property";
import { GetPropertiesResponse } from "../type/response/getProperties";

const toPropertyList = (res: GetPropertiesResponse): Property[] => {
  const propertyList: Property[] = res.properties.map((property) => {
    return {
      id: property.id,
      name: property.name,
      isPurchasable: property.is_purchasable,
    };
  });

  return propertyList;
};

export default toPropertyList;
