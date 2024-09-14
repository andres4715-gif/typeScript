import Vehicle from './vehicle';
import { requirement } from './types';

class Car extends Vehicle {
  readonly color: string;
  readonly enginePower: number;
  readonly maxSpeed: number;
  readonly price?: number;

  constructor(
    brand: string,
    model: string,
    year: number,
    type: string,
    color: string,
    enginePower: number,
    maxSpeed: number,
    price: number
  ) {
    super(brand, model, year, type);
    this.color = color;
    this.enginePower = enginePower;
    this.maxSpeed = maxSpeed;
    this.price = price;
  }

  carAvailability(): void {
    const car: requirement = {
      brand: 'Mazda',
      model: '3',
      color: 'gray',
      year: 2016,
    };

    // This data came comes form any api call
    if (
      this.brand === car.brand &&
      this.model === car.model &&
      this.color === car.color &&
      this.year === car.year
    ) {
      console.log(
        `---✅ Your Car is available: ${this.brand} ${this.model} color: ${this.color} Year: ${this.year} type: ${this.type}`
      );
    } else {
      console.log(`---❌ We don't have this car for now... ❌`);
    }
  }

  printCarDataInformation() {
    console.log(`--- The model is: ${this.displayCarData()}`);
  }
}

export default Car;
