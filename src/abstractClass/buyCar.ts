import Car from './abstractClassImplementation';
import { carData } from './types';

const search1: carData = {
  brand: 'Mazda',
  model: '3',
  year: 2016,
  hashBack: false,
  color: 'gray',
  enginePower: 2000,
  maxSpeed: 230,
  price: 56,
};

const car = new Car(
  search1.brand,
  search1.model,
  search1.year,
  search1.hashBack,
  search1.color,
  search1.enginePower,
  search1.maxSpeed,
  search1.price
);

console.log(`--- The model is: ${car.displayCarData()}`);
car.findCar();
