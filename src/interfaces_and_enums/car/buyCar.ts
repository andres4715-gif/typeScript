import { Seller } from './interface';

export class ByCar implements Seller {
  brand: string;
  model: string;
  year: number;
  carSafetyRating: number;
  location: string;
  carStatus: string;
  name: string;
  reputation: string;
  priority: string; // it does not comes form any interface it is form this class

  constructor(
    brand: string,
    model: string,
    year: number,
    carSafetyRating: number,
    location: string,
    carStatus: string,
    name: string,
    reputation: string,
    priority: string
  ) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.carSafetyRating = carSafetyRating;
    this.location = location;
    this.carStatus = carStatus;
    this.name = name;
    this.reputation = reputation;
    this.priority = priority;
  }

  showData(): string {
    return `
    --- ✅ Car to be sold ✅ ---
      Brand: ${this.brand}
      Model: ${this.model}
      Year: ${this.year}
      Security: ${this.carSafetyRating}
      Car status: ${this.carStatus}
      Dealer: ${this.name} 
      Dealer Reputation: ${this.reputation}
      Client Priority: ${this.priority}
    `;
  }
}
