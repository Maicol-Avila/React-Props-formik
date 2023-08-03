import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components/";
import "../styles/custom-styles.css";

import { Products } from "../data/products";

import styles from "../styles/styles.module.css";

const products = Products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={products.id}
        product={products}
        className="bg-dark"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImg className="custom-image" />
            <ProductTitle title="Titulo opcional" className="color-white" />
            <ProductButtons className="custom-buttons" />

            <button onClick={() => reset()}>Reset</button>
            {!!isMaxCountReached && count === maxCount}

            <button
              className={`${isMaxCountReached && styles.disabledBtn}`}
              onClick={() => increseBy(2)}
            >
              +2
            </button>

            <button onClick={() => increseBy(-2)}>-2</button>
            <hr />
            <span>{`Maximo permitido, ${count}`}</span>
          </>
        )}
      </ProductCard>
      <hr />
    </div>
  );
};
