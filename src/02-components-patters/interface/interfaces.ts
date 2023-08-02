import { CSSProperties, ReactElement } from "react";

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  styles?: CSSProperties;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}
export interface PropsTitle {
  title?: string;
  className?: string;
}

export interface ProductConextProps {
  Counter: number;
  increseBy: (value: number) => void;
  product: Product;
}
