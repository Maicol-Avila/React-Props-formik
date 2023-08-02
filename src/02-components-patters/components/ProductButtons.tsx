import { ProductContext } from "./ProductCard";
import { useContext } from "react";
import style from "../styles/styles.module.css";

export const ProductButtons = ({ className }: { className?: string }) => {
  const { increseBy, Counter } = useContext(ProductContext);
  return (
    <div className={`${style.buttonsContainer} ${className}`}>
      <button className={style.buttonMinus} onClick={() => increseBy(-1)}>
        -
      </button>
      <div className={style.countLabel}>{Counter}</div>

      <button className={style.buttonAdd} onClick={() => increseBy(+1)}>
        +
      </button>
    </div>
  );
};

export default ProductButtons;
