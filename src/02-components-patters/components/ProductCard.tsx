import style from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductConextProps, Props } from "../interface/interfaces";

export const ProductContext = createContext({} as ProductConextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  styles,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { Counter, increseBy, maxCount, isMaxCountReaced, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        Counter,
        increseBy,
        product,
        maxCount,
      }}
    >
      <div
        style={styles}
        className={` ${style.productCard} ${className} `}
        id={product.id}
      >
        {children({
          count: Counter,
          isMaxCountReached: isMaxCountReaced,
          maxCount: maxCount,
          product,

          reset,
          increseBy,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;
//Esta es otra forma de importar por componente
//Le asignamos al compotnente prouctCart dandolelaasignacion de tileque que es ProductTitle
// ProductCard.Title = ProductTitle;
// ProductCard.Button = ProductButtons;
// ProductCard.img = ProductImg;
