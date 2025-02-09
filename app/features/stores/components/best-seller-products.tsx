import React from "react";
import { ProductType } from "@/api/stores/products.types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BestSellerProductCard } from "./best-seller-product-card";
import { Separator } from "@/components/ui/separator";

export function BestSellersProducts({
  bestSellersProducts,
}: {
  bestSellersProducts: ProductType[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Melhores da casa</h2>
      <div className="flex gap-4 flex-col">
        {bestSellersProducts.map((product, index) => (
          <div className="flex flex-col gap-2">
            <BestSellerProductCard key={product.id} product={product} />
            {index < bestSellersProducts.length - 1 ? <Separator /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
