import { StatusType } from "@/app/stores/[store-id]/page";
import { fakeRandomDelay } from "@/shared/helpers/async";

type GetStore = {
  id: string;
};

const store: StoreType = {
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

export async function useStore({ id }: GetStore) {
  await fakeRandomDelay();
  return store;
}
