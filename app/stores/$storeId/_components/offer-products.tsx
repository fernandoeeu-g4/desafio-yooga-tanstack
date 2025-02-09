import React from "react";
import { ProductType } from "@/api/stores/products.types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ProductInSaleCard } from "./product-in-sale-card";

export const OfferProducts = ({
  productsInSale,
}: {
  productsInSale: ProductType[];
}) => {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold mb-2">Produtos em oferta 💙</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex gap-4">
          {productsInSale.map((product) => (
            <ProductInSaleCard key={product.id} product={product} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
