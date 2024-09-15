export type Car = {
  readonly brand: string;
  readonly model?: string;
  readonly year: number;
  readonly color?: string;
  readonly price: number;
};

export type CarInfo = {
  readonly city?: string;
  readonly vendor: string;
};
