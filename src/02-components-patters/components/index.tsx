import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductImg } from "./ProductImg";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export { ProductImg } from "./ProductImg";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

export const ProductCard = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImg,
  Buttons: ProductButtons,
});
