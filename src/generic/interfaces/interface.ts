// Original interface with defined types:
interface burger {
  size: string;
  price: number;
}

const myBurger = { size: 'Small', price: 10 };
console.log('Regular way to use an interface: ', myBurger);
const { size } = myBurger;
console.log('The burger size is: ', size);

// Using generics on interface
interface burgerGeneric<T> {
  size: T;
  price: number;
}

// const myBurger1: burger = { size: 'Small', price: 10 };
const myBurgerNumber: burgerGeneric<number> = { size: 3, price: 10 };
const myBurgerString: burgerGeneric<string> = { size: 'Small', price: 10 };

console.log('Generic Burger with numbers:', myBurgerNumber);
console.log('Generic Burger with strings', myBurgerString);
