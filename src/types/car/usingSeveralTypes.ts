import { Car, CarInfo } from './types';

const car: Car = {
  brand: 'Mazda',
  model: '3',
  year: 2016,
  color: 'gray',
  price: 56,
};

const fullData: Car & CarInfo = {
  brand: 'Mazda',
  model: '3',
  year: 2016,
  color: 'gray',
  price: 56,
  city: 'Orlando',
  vendor: 'sohoCars',
};

const showCar = (car: Car, dataInfo: CarInfo) => {
  console.log(
    `--- ✅ The new car is ${car.brand} ${car.model} and the price was ${car.price} sold by ${dataInfo.vendor}`
  );
};

showCar(car, fullData);
