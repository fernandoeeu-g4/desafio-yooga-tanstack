import { StatusType } from "@/features/stores/components/store-info";
import { fakeRandomDelay } from "@/shared/helpers/async";
import { createServerFn } from "@tanstack/start";

export const store: StoreType = {
  id: "1",
  name: "Vila do Açaí - Jardim da Penha",
  price: 100,
  image: "https://avatar.iran.liara.run/public/1",
  category: "Açaiteria",
  distance: "6,3 km",
  deliveryTimeEstimate: "Hoje, 80-90 min",
  minPrice: "Min. R$ 10,00",
  status: "open",
};

export type StoreType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  distance: string;
  deliveryTimeEstimate: string;
  minPrice: string;
  status: StatusType;
};

export const fetchStore = createServerFn({ method: "GET" })
  .validator((d: string) => d)
  .handler(async ({ data }) => {
    await fakeRandomDelay();
    // In a real application, you would fetch the store data from a database
    // based on the provided ID.
    // Here, we are using a mock store.
    console.info(`Fetching store with id ${data}...`);
    return store;
  });
