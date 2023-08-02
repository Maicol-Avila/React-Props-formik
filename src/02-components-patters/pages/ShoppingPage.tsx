import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components/";
import { Product } from "../interface/interfaces";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "",
  img: "./coffee-mug2.png",
};

const Products: Product[] = [product, product2];

interface ProductProps {
  count: number;
  id: string;
  title: string;
  img: string;
}

export const ShoppingPage = () => {
  const [ShoppingCart, setShoppingCart] = useState<ProductProps>({
    "1": { ...product, count: 10 },
    "2": { ...product2, count: 10 },
  });

  console.log(ShoppingCart);
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} className="bg-dark">
            <ProductImg className="custom-image" />
            <ProductTitle title="Titulo opcional" className="color-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <ProductCard
          styles={{ width: "100px" }}
          product={product}
          className="bg-dark"
        >
          <ProductImg className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          styles={{ width: "100px" }}
          product={product2}
          className="bg-dark"
        >
          <ProductImg className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};
