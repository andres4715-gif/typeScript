export type TFurniture = {
  readonly brand: string;
  readonly name: string;
  readonly color: string;
  readonly weight: number;
  readonly action: string;
  readonly type: string;
  readonly price: TPrice[];
  readonly button: TButton;
};

type TPrice = {
  readonly size: string;
  readonly finalPrice: number;
};

type TButton = {
  readonly start: boolean;
  readonly on: boolean;
  readonly off: boolean;
};
