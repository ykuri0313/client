import { Property } from "@/type/viewModel/common/property";
import { GetPropertyResponse } from "../type/response/getProperty";

const toProperty = (res: GetPropertyResponse): Property => {
  const property: Property = {
    id: res.id,
    name: res.name,
    description: res.description,
    rentalPeriod: res.rental_period,
    price: res.price,
    isPurchasable: res.is_purchasable,
    status: res.status,
    imageUrl: res.image_url ?? undefined,
  };

  return property;
};

export default toProperty;
