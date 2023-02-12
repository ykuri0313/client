import { Property } from "@/type/viewModel/common/property";
import { GetPropertiesResponse } from "../type/response/getProperties";

const toPropertyList = (res: GetPropertiesResponse): Property[] => {
  const propertyList: Property[] = res.properties.map((property) => {
    return {
      id: property.id,
      name: property.name,
      description: property.description,
      rentalPeriod: property.rental_period,
      price: property.price,
      isPurchasable: property.is_purchasable,
      status: property.status,
      imageUrl: property.image_url ?? undefined,
    };
  });

  return propertyList;
};

export default toPropertyList;
