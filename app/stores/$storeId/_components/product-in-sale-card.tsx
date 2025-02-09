import { ProductType } from "@/api/stores/products.types";
import { Badge } from "@/components/ui/badge";
import React from "react";

export const ProductInSaleCard = ({ product }: { product: ProductType }) => {
  const { name, discountedPriceLabel, priceLabel, discountTagLabel, image } =
    product;
  return (
    <div className="rounded-lg overflow-hidden flex flex-col gap-3">
      <div className="relative h-32 aspect-video rounded-lg bg-slate-100">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="font-medium mb-2 text-xs">{name}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold">{discountedPriceLabel}</span>
          <span className="text-gray-400 line-through text-xs">
            {priceLabel}
          </span>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-700 text-xs"
          >
            {discountTagLabel}
          </Badge>
        </div>
      </div>
    </div>
  );
};
