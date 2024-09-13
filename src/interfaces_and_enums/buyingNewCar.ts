import { ByCar } from './buyCar';
import { myCarInfo } from './interface';
import {
  dealerReputation,
  clientPriority,
  CarSafetyRating,
  CarStatus,
} from './interface';

const dataCar: myCarInfo = {
  brand: 'Mazda',
  model: '3',
  year: 2016,
  carSafetyRating: CarSafetyRating.SAFE + 1,
  location: 'Canada',
  carStatus: CarStatus.RESERVED,
  name: 'sohoCars',
  reputation: dealerReputation.EXCELlENT,
  priority: clientPriority.HIGH,
};

const byCar = new ByCar(
  dataCar.brand,
  dataCar.model,
  dataCar.year,
  dataCar.carSafetyRating,
  dataCar.location,
  dataCar.carStatus,
  dataCar.name,
  dataCar.reputation,
  dataCar.priority
);
const dataToPrint = byCar.showData();
console.log(dataToPrint);
