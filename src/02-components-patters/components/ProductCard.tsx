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
}: Props) => {
  const { Counter, increseBy } = useProduct();

  return (
    <Provider
      value={{
        Counter,
        increseBy,
        product,
      }}
    >
      <div
        style={styles}
        className={` ${style.productCard} ${className} `}
        id={product.id}
      >
        {children}
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
