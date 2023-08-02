import { ProductContext } from "./ProductCard";
import { useContext } from "react";
import style from "../styles/styles.module.css";
import { PropsTitle } from "../interface/interfaces";

export const ProductTitle = ({ title, className }: PropsTitle) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={` ${style.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};

export default ProductTitle;
