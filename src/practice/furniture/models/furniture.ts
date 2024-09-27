import PriceFurniture from './priceFurniture';
import Button from './button';

class Furniture {
  brand: string;
  color: string;
  weight: number;
  action: string;
  type: string;
  price: PriceFurniture;
  button: Button;

  constructor(
    brand: string,
    color: string,
    weight: number,
    action: string,
    type: string,
    price: PriceFurniture,
    button: Button
  ) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.action = action;
    this.type = type;
    this.price = price;
    this.button = button;
  }
}

export default Furniture;
