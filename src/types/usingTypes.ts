import { Car } from './types';

const cartToBuy: Car = {
  brand: 'Mazda',
  model: '3',
  year: 2016,
  color: 'gray',
  price: 56,
};

const showCar = (car: Car) => {
  console.log(
    `--- ✅ The new car is ${car.brand} ${car.model} and the price was ${car.price}`
  );
};

showCar(cartToBuy);
