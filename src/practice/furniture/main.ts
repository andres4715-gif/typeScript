import { TFurniture } from './types/type';
import Device from './device';

const furniture: TFurniture = {
  brand: 'Xiaomi',
  name: 'vacuum cleaner',
  color: 'write',
  weight: 2,
  action: 'sweep',
  type: 'battery',
  price: [
    {
      size: 'small',
      finalPrice: 200,
    },
    {
      size: 'big',
      finalPrice: 350,
    },
  ],
  button: {
    start: true,
    on: true,
    off: true,
  },
};

const furniture1 = new Device(
  furniture.brand,
  furniture.name,
  furniture.color,
  furniture.weight,
  furniture.action,
  furniture.type,
  furniture.price[0],
  furniture.button
);

console.log(`🚀 Furniture: ${furniture1?.getBrand()}, ${furniture1.getName()}`);
console.log(`🚀 Furniture price: ${furniture1?.getPrice().finalPrice}`);
furniture1.sweeping();
furniture1.charging();
