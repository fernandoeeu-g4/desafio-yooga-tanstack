import { ProductType } from "@/api/stores/products.types";
import { ProductCard } from "./product-card";

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
    <ProductCard.Content className="grid grid-cols-[4fr_7fr] gap-4 items-start">
      <div className="relative w-full h-full flex-shrink-0 rounded-lg overflow-hidden">
        <ProductCard.Image image={image} />
      </div>
      <ProductCard.ProductInfo>
        <ProductCard.Name>{name}</ProductCard.Name>
        <ProductCard.Description>{description}</ProductCard.Description>
        <ProductCard.Pricing>
          <ProductCard.Price>{discountedPriceLabel}</ProductCard.Price>
          <ProductCard.DiscountedPrice>
            {priceLabel}
          </ProductCard.DiscountedPrice>
          <ProductCard.DiscountTag>{discountTagLabel}</ProductCard.DiscountTag>
        </ProductCard.Pricing>
      </ProductCard.ProductInfo>
    </ProductCard.Content>
  );
}
