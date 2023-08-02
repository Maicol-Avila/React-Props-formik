import { useState } from "react";

export const useProduct = () => {
  const [Counter, setCounter] = useState<number>(0);

  const increseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return {
    increseBy,
    Counter,
  };
};
