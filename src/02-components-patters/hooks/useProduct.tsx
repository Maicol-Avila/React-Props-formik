import { useEffect, useRef, useState } from "react";
import { Product, InitialValues, onChangeArgs } from "../interface/interfaces";
import { count } from "console";

interface useProductArs {
  product: Product;
  onChange?: (arg: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArs) => {
  const [Counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const increseBy = (value: number) => {
    let newValue = Math.max(Counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);

    onChange &&
      onChange({
        count: newValue,
        product,
      });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    increseBy,
    Counter,
    isMaxCountReaced:
      !!initialValues?.maxCount && initialValues.maxCount === Counter,
    maxCount: initialValues?.maxCount || value,
    reset,
  };
};
