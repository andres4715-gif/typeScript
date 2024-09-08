import { Seller } from './interface';

export class ByCar implements Seller {
  brand: string;
  model: string;
  year: number;
  name: string;
  reputation: boolean;
  priority?: string; // it does not comes form any interface it is form this class

  constructor(
    brand: string,
    model: string,
    year: number,
    name: string,
    reputation: boolean
  ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.name = name;
    this.reputation = reputation;
  }

  showData(): string {
    return `--- ✅ Car to be sold: ${this.brand} ${this.model} by ${this.name} with good reputation: ${this.reputation}`;
  }
}
