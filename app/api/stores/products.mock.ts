import { ProductType } from "./products.types";

const imageUrl =
  "https://thumbs.dreamstime.com/z/whole-roasted-turkey-chicken-garnished-herbs-isolated-white-background-concept-food-thanksgiving-day-fresh-333799794.jpg?ct=jpeg";

export const bestSellersProductsMock: ProductType[] = [
  {
    id: "1",
    name: "Açaí Natural da Caasa",
    priceLabel: "R$40,00",
    discountedPriceLabel: "R$20,00",
    image: imageUrl,
    description: "Açaí, banana, granola, leite condensado e morango.",
    discountTagLabel: "-50%",
  },
  {
    id: "2",
    name: "10 Litros de Sorvete de Açaí",
    priceLabel: "R$100,00",
    discountedPriceLabel: "R$50,00",
    image: imageUrl,
    description: "Açaí, banana, granola, leite condensado, morango e kiwi.",
    discountTagLabel: "-50%",
  },
  {
    id: "3",
    name: "Açaí com Morango",
    priceLabel: "R$22,90",
    discountedPriceLabel: "R$10,00",
    image: imageUrl,
    description: "Açaí e morango.",
    discountTagLabel: "-10%",
  },
];
