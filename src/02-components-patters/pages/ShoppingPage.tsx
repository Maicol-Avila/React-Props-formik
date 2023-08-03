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

interface ProductProps extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [ShoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductProps;
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

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
        {Products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onChangeCountProduct}
            value={ShoppingCart[product.id]?.count | 0}
          >
            <ProductImg className="custom-image" />
            <ProductTitle title="Titulo opcional" className="color-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <hr />

      {
        // <input value={ counter}
        // onChange={(e) => setShoppingCart(e.target.value)} />
      }
      <div className="shopping-cart">
        {Object.entries(ShoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            styles={{ width: "100px" }}
            value={product.count}
            onChange={onChangeCountProduct}
          >
            <ProductImg className="custom-image" />
            <ProductTitle />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
