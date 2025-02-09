import React from "react";
import { ProductType } from "@/api/stores/products.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProductInSaleCard } from "./product-in-sale-card";
import { Separator } from "@/components/ui/separator";

export const OfferProducts = ({
  productsInSale,
}: {
  productsInSale: ProductType[];
}) => {
  return (
    <section className=" flex flex-col gap-3">
      <h2 className="text-xl font-bold">Produtos em oferta 💙</h2>
      <Carousel>
        <CarouselContent>
          {productsInSale.map((product, index) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 flex flex-col gap-3"
            >
              <ProductInSaleCard product={product} />
              {index > productsInSale.length - 1 ? <Separator /> : null}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
