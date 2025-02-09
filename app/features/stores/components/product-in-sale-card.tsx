import { ProductType } from "@/api/stores/products.types";
import { ProductCard } from "./product-card";

export const ProductInSaleCard = ({ product }: { product: ProductType }) => {
  const { name, discountedPriceLabel, priceLabel, discountTagLabel, image } =
    product;
  return (
    <ProductCard className="rounded-lg overflow-hidden flex flex-col gap-2">
      <ProductCard.Image image={image} />
      <ProductCard.ProductInfo>
        <ProductCard.Name>{name}</ProductCard.Name>
        <ProductCard.Pricing>
          <ProductCard.Price>{discountedPriceLabel}</ProductCard.Price>
          <ProductCard.DiscountedPrice>
            {priceLabel}
          </ProductCard.DiscountedPrice>
          <ProductCard.DiscountTag>{discountTagLabel}</ProductCard.DiscountTag>
        </ProductCard.Pricing>
      </ProductCard.ProductInfo>
    </ProductCard>
  );
};
