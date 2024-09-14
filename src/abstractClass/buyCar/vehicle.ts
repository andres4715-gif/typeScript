/*
Is possible to have abstract properties and methods 
- for abstract properties is not necessary to add this on the constructor 
*/

abstract class Vehicle {
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  readonly type: string;

  constructor(brand: string, model: string, year: number, type: string) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.type = type;
  }

  displayCarData(): string {
    return `${this.brand} ${this.model}`;
  }

  abstract carAvailability(brand: string): void;
}

export default Vehicle;
