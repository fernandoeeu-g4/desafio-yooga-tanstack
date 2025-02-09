import React from "react";
import { ProductType } from "@/api/stores/products.types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BestSellerProductCard } from "./best-seller-product-card";

export function BestSellers({
  bestSellersProducts,
}: {
  bestSellersProducts: ProductType[];
}) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Melhores da casa</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex gap-4">
          {bestSellersProducts.map((product) => (
            <BestSellerProductCard key={product.id} product={product} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
