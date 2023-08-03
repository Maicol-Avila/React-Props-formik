import { CSSProperties, ReactElement } from "react";

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  styles?: CSSProperties;
  onChange?: (arg: onChangeArgs) => void;
  value?: number;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface PropsTitle {
  title?: number | string;
  className?: string;
}

export interface ProductConextProps {
  Counter: number;
  increseBy: (value: number) => void;
  product: Product;
}

export interface ProductIncart extends Product {
  count: number;
}
