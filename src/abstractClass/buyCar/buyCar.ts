import Car from './car';
import { carData } from './types';

const stock: carData = {
  brand: 'Mazda',
  model: '3',
  year: 2016,
  type: 'sedan',
  color: 'gray',
  enginePower: 2000,
  maxSpeed: 230,
  price: 56,
};

const car = new Car(
  stock.brand,
  stock.model,
  stock.year,
  stock.type,
  stock.color,
  stock.enginePower,
  stock.maxSpeed,
  stock.price
);

car.printCarDataInformation();
car.carAvailability();
