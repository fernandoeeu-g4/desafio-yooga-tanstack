import { ProductType } from "@/api/stores/products.types";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type BestSellerProductCardProps = {
  product: ProductType;
};

export function BestSellerProductCard({ product }: BestSellerProductCardProps) {
  const {
    name,
    priceLabel,
    description,
    discountedPriceLabel,
    image,
    discountTagLabel,
  } = product;
  return (
    <div className="flex gap-4 items-start">
      <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-semibold">{discountedPriceLabel}</span>
          <span className="text-gray-400 line-through text-sm">
            {priceLabel}
          </span>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            {discountTagLabel}
          </Badge>
        </div>
      </div>
    </div>
  );
}
