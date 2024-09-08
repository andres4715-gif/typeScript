/*
Is possible to have abstract properties and methods 
- for abstract properties is not necessary to add this on the constructor 
*/

export abstract class Vehicle {
  readonly brand: string;
  readonly model: string;
  readonly year: number;
  readonly hashBack: boolean;

  constructor(brand: string, model: string, year: number, hasBack: boolean) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.hashBack = hasBack;
  }

  displayCarData(): string {
    return this.model;
  }

  abstract findCar(brand: string): void;
}
