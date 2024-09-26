class Burger<T> {
  size: T;
  price: number;

  constructor(size: T, price: number) {
    this.size = size;
    this.price = price;
  }
}

const burger: Burger<string> = new Burger('Small', 10);
const burger2: Burger<number> = new Burger(1, 10);

console.log(burger);
console.log(burger2);
