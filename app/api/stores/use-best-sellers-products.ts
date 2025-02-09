import { createServerFn } from "@tanstack/start";
import { bestSellersProductsMock } from "./products.mock";

export const fetchBestSellersProducts = createServerFn({ method: "GET" })
  .validator((data: string) => data)
  .handler(async ({ data }) => {
    console.info(`Fetching best sellers products with storeId ${data}...`);
    return bestSellersProductsMock;
  });
