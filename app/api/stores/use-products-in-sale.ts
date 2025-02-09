import { fakeRandomDelay } from "@/shared/helpers/async";
import { bestSellersProductsMock } from "./products.mock";
import { ProductType } from "./products.types";

type GetProductsInSale = {
  storeId: string;
};

export function useProductsInSale({ storeId }: GetProductsInSale) {
  return { data: bestSellersProductsMock, isLoading: false };
}
