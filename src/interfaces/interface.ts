interface Car {
  readonly brand: string;
  readonly model: string;
  readonly year?: number;
}

export interface Seller extends Car {
  readonly name: string;
  readonly reputation: boolean;

  showData(): string;
}

export type myCarInfo = {
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  readonly name: string;
  readonly reputation: boolean;
};
