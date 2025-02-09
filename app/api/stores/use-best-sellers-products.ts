import { fakeRandomDelay } from "@/shared/helpers/async";
import { bestSellersProductsMock } from "./products.mock";
import { ProductType } from "./products.types";

type GetBestSellersProducts = {
  storeId: string;
};

export function useBestSellersProducts({ storeId }: GetBestSellersProducts) {
  return { data: bestSellersProductsMock, isLoading: false };
}
