import PriceFurniture from './priceFurniture';
import Button from './button';

abstract class Furniture {
  private brand: string;
  private name: string;
  private color: string;
  private weight: number;
  private action: string;
  private type: string;
  private price: PriceFurniture;
  private button: Button;

  constructor(
    brand: string,
    name: string,
    color: string,
    weight: number,
    action: string,
    type: string,
    price: PriceFurniture,
    button: Button
  ) {
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.action = action;
    this.type = type;
    this.price = price;
    this.button = button;
  }

  public getBrand(): string {
    return this.brand;
  }

  public getName(): string {
    return this.name;
  }

  public getColor(): string {
    return this.color;
  }

  public getWeight(): number {
    return this.weight;
  }

  public getAction(): string {
    return this.action;
  }

  public getType(): string {
    return this.type;
  }

  public getPrice(): PriceFurniture {
    return this.price;
  }

  public getButton(): Button {
    return this.button;
  }

  abstract charging(): void;

  private activate(): boolean {
    if (this.getAction() === 'sweep') {
      return true;
    } else {
      return false;
    }
  }

  private disable(): boolean {
    if (this.getAction() === 'sweep') {
      return true;
    } else {
      return false;
    }
  }

  sweeping(): boolean {
    if (this.action === 'sweep') {
      return this.activate();
    } else {
      return this.disable();
    }
  }
}

export default Furniture;
