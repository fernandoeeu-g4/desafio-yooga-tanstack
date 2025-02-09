import { createServerFn } from "@tanstack/start";
import { bestSellersProductsMock } from "./products.mock";

export const fetchProductsInSale = createServerFn({ method: "GET" })
  .validator((data: string) => data)
  .handler(async ({ data }) => {
    console.info(`Fetching products in sale with storeId ${data}...`);
    return bestSellersProductsMock;
  });
