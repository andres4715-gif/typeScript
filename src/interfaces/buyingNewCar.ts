import { ByCar } from './buyCar';
import { myCarInfo } from './interface';

const dataCar: myCarInfo = {
  brand: 'Mazda',
  model: '3',
  year: 2016,
  name: 'sohoCars',
  reputation: true,
};

const byCar = new ByCar(
  dataCar.brand,
  dataCar.model,
  dataCar.year,
  dataCar.name,
  dataCar.reputation
);
const dataToPrint = byCar.showData();
console.log(dataToPrint);
