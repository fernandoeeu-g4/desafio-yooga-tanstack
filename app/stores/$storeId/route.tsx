import { useProductsInSale } from "app/api/stores/use-products-in-sale";
import { BestSellers } from "./_components/best-sellers";
import { OfferProducts } from "./_components/offer-products";
import { StoreInfo } from "./_components/store-info";
import { useStore } from "@/api/stores/use-product";
import { useBestSellersProducts } from "@/api/stores/use-best-sellers-products";

export default async function StorePage({
  params,
}: {
  params: { storeId: string };
}) {
  const { storeId } = params;
  const store = await useStore({ id: storeId });
  const { data: bestSellersProducts, isLoading: isLoadingBestSellers } =
    useBestSellersProducts({ storeId });
  const { data: productsInSale, isLoading: isLoadingProductsInSale } =
    useProductsInSale({ storeId });

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full bg-white rounded-t-[40px]">
      <div className="p-4 flex flex-col gap-4">
        <StoreInfo store={store} />
        <Separator />
        <OfferProducts productsInSale={productsInSale} />
        <Separator />
        <BestSellers bestSellersProducts={bestSellersProducts} />
      </div>
    </div>
  );
}
