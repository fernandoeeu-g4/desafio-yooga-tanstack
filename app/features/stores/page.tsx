import { Await, getRouteApi } from "@tanstack/react-router";
import { StoreInfo } from "./components/store-info";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { OfferProducts } from "./components/offer-products";
import { BestSellersProducts } from "./components/best-seller-products";

const route = getRouteApi("/stores/$storeId");

export function StorePage() {
  const { store, productsInSale, bestSellers } = route.useLoaderData();

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full bg-white rounded-t-[40px]">
      <div className="p-4 flex flex-col gap-4">
        <StoreInfo store={store} />
        <Separator />
        <Suspense>
          <Await promise={productsInSale}>
            {(productsInSale) => (
              <>
                <OfferProducts productsInSale={productsInSale} />
                <Separator />
              </>
            )}
          </Await>
        </Suspense>
        <Suspense>
          <Await promise={bestSellers}>
            {(bestSellers) => (
              <BestSellersProducts bestSellersProducts={bestSellers} />
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
