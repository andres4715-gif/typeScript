import Furniture from './models/furniture';
import { TFurniture } from './types/type';

const furniture: TFurniture = {
  brand: 'Xiaomi',
  color: 'write',
  weight: 2,
  action: 'sweep',
  type: 'battery',
  price: {
    size: 'small',
    price: 200,
  },
  button: {
    start: true,
    on: true,
    off: true,
  },
};

const furniture1 = new Furniture(
  furniture.brand,
  furniture.color,
  furniture.weight,
  furniture.action,
  furniture.type,
  furniture.price,
  furniture.button
);

console.log(`--- 🚀 The obtained furniture is: ${furniture1.brand}`);
