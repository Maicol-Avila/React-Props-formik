import { useState } from "react";
import { Product, ProductIncart } from "../interface/interfaces";

export const useShoppingCart = () => {
  const [ShoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductIncart;
  }>({});

  const onChangeCountProduct = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: todelete, ...rest } = oldShoppingCart;
        console.log({ todelete });
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    onChangeCountProduct,
    ShoppingCart,
  };
};
