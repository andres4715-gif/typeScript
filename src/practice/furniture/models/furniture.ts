import PriceFurniture from './priceFurniture';
import Button from './button';

abstract class Furniture {
  private brand: string;
  private name: string;
  private color: string;
  private weight: number;
  private action: string;
  private type: string;
  private batteryLevel: number;
  private status: boolean;
  private autonomy: number;
  private timeCycle: number;
  private price: PriceFurniture;
  private button: Button;

  constructor(
    brand: string,
    name: string,
    color: string,
    weight: number,
    action: string,
    type: string,
    batteryLevel: number,
    status: boolean,
    autonomy: number,
    timeCycle: number,
    price: PriceFurniture,
    button: Button
  ) {
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.action = action;
    this.type = type;
    this.batteryLevel = batteryLevel;
    this.status = status;
    this.autonomy = autonomy;
    this.timeCycle = timeCycle;
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

  public getBatteryLevel(): number {
    return this.batteryLevel;
  }

  public getStatus(): boolean {
    return this.status;
  }

  public getAutonomy(): number {
    return this.autonomy;
  }

  public getTimeCycle(): number {
    return this.timeCycle;
  }

  public getPrice(): PriceFurniture {
    return this.price;
  }

  public getButton(): Button {
    return this.button;
  }

  // Abstract classes:
  abstract charging(): void;

  // Methods:
  private disable(): boolean {
    if (this.getStatus() === true) {
      return true;
    } else {
      return false;
    }
  }

  private activate(): boolean {
    if (this.getStatus() === true) {
      return true;
    } else {
      return false;
    }
  }

  sweeping(): boolean {
    let status: boolean = false;
    if (this.getStatus() === true) {
      status = this.activate();
      return status;
    } else {
      status = this.disable();
      return status;
    }
  }

  static batteryInitialLevel(): number {
    const level: number = Math.floor(Math.random() * 100);
    return level;
  }
}

export default Furniture;
