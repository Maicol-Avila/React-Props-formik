import { CSSProperties } from "react";

export interface Props {
  product: Product;
  children: (args: ProductCartHandlers) => JSX.Element;
  className?: string;
  styles?: CSSProperties;
  onChange?: (arg: onChangeArgs) => void;
  value?: number;
  initialValues: InitialValues;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
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
  maxCount?: number;
  product: Product;
}

export interface ProductIncart extends Product {
  count: number;
}

export interface ProductCartHandlers {
  count: number;
  isMaxCountReached?: boolean;
  maxCount: number;
  product: Product;
  increseBy: (value: number) => void;
  reset: () => void;
}
