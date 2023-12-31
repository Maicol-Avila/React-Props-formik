import { useEffect, useState } from "react";
import { Product, onChangeArgs } from "../interface/interfaces";

interface useProductArs {
  product: Product;
  onChange?: (arg: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArs) => {
  const [Counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increseBy = (value: number) => {
    const newValue = Math.max(Counter + value, 0);

    setCounter(newValue);

    onChange &&
      onChange({
        count: newValue,
        product,
      });
  };
  return {
    increseBy,
    Counter,
  };
};
