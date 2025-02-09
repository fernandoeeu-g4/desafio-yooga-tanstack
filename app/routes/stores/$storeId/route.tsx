// import { fetchBestSellersProducts } from "@/api/stores/use-best-sellers-products";
// import { fetchStore } from "@/api/stores/use-product";
// import { fetchProductsInSale } from "@/api/stores/use-products-in-sale";
// import { NotFound } from "@/components/NotFound";
// import { Separator } from "@/components/ui/separator";
// import { Await, createFileRoute, useParams } from "@tanstack/react-router";
// import { Suspense } from "react";
// import { BestSellers } from "./_components/best-sellers";
// import { OfferProducts } from "./_components/offer-products";

import { fetchProductsInSale } from "@/api/stores/use-products-in-sale";

import { fetchStore, store } from "@/api/stores/use-product";
import { StoreInfo } from "@/features/stores/components/store-info";
import { StorePage } from "@/features/stores/page";
import { createFileRoute } from "@tanstack/react-router";
import { fetchBestSellersProducts } from "@/api/stores/use-best-sellers-products";

// import { StoreInfo } from "./_components/store-info";
export const Route = createFileRoute("/stores/$storeId")({
  loader: async ({ params: { storeId } }) => {
    return {
      productsInSale: fetchProductsInSale({ data: storeId }),
      bestSellers: fetchBestSellersProducts({ data: storeId }),
      store: await fetchStore({ data: storeId }),
    };
  },
  // component: RouteComponent,
  component: () => {
    return (
      <div className=" bg-red-200 pt-[30%]">
        <StorePage />
      </div>
    );
  },
  // notFoundComponent: () => <NotFound>Store not found</NotFound>,
});

// function RouteComponent() {
//   const { storeId } = useParams({ from: "/stores/$storeId" });
//   const { store, bestSellers, productsInSale } = Route.useLoaderData();

//   return (
//     <div className="h-full bg-white rounded-t-[40px]">
//       <div className="p-4 flex flex-col gap-4">
<StoreInfo store={store} />;
//         <Separator />
//         <Suspense>
//           <Await promise={productsInSale}>
//             {(productsInSale) => (
//               <>
//                 <OfferProducts productsInSale={productsInSale} />
//                 <Separator />
//               </>
//             )}
//           </Await>
//         </Suspense>
//         <Suspense>
//           <Await promise={bestSellers}>
//             {(bestSellers) => <BestSellers bestSellersProducts={bestSellers} />}
//           </Await>
//         </Suspense>
//       </div>
//     </div>
//   );
// }
