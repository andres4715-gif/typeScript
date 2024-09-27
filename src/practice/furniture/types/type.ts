export type TFurniture = {
  brand: string;
  color: string;
  weight: number;
  action: string;
  type: string;
  price: TPrice;
  button: TButton;
};

type TPrice = {
  size: string;
  price: number;
};

type TButton = {
  start: boolean;
  on: boolean;
  off: boolean;
};
