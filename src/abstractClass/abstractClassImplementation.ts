import { Vehicle } from './abstractClass';

class Car extends Vehicle {
  readonly color: string;
  readonly enginePower: number;
  readonly maxSpeed: number;
  readonly price?: number;

  constructor(
    brand: string,
    model: string,
    year: number,
    hashBack: boolean,
    color: string,
    enginePower: number,
    maxSpeed: number,
    price: number
  ) {
    super(brand, model, year, hashBack);
    this.color = color;
    this.enginePower = enginePower;
    this.maxSpeed = maxSpeed;
    this.price = price;
  }

  findCar(): void {
    // This data came comes form any api call
    if (this.brand === 'Mazda' && this.model === '3' && this.color === 'gray') {
      console.log(`---✅ Buy this car`);
    } else {
      console.log(`---❌ Nothing to show for this brand and model`);
    }
  }
}

export default Car;
