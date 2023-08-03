import { ProductContext } from "./ProductCard";
import { useCallback, useContext } from "react";
import style from "../styles/styles.module.css";

export const ProductButtons = ({ className }: { className?: string }) => {
  const { increseBy, Counter, maxCount } = useContext(ProductContext);

  const isMaxedRached = useCallback(
    () => !!maxCount && Counter === maxCount,
    [Counter, maxCount]
  );

  return (
    <div className={`${style.buttonsContainer} ${className}`}>
      <button className={style.buttonMinus} onClick={() => increseBy(-1)}>
        -
      </button>
      <div className={style.countLabel}>{Counter}</div>

      <button
        className={` ${style.buttonAdd} ${isMaxedRached() && style.disabled}`}
        onClick={() => increseBy(+1)}
      >
        +
      </button>
    </div>
  );
};

export default ProductButtons;
