import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components/";
import "../styles/custom-styles.css";

import { Products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { onChangeCountProduct, ShoppingCart } = useShoppingCart();

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
            value={ShoppingCart[product.id]?.count || 0}
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
