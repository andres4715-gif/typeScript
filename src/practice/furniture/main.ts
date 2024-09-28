import { TFurniture } from './types/type';
import Device from './device';

const furniture: TFurniture = {
  brand: 'Xiaomi',
  name: 'vacuum cleaner',
  color: 'write',
  weight: 2,
  action: 'sweep',
  type: 'battery',
  batteryLevel: 50,
  status: false,
  autonomy: 60,
  timeCycle: 30,
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

const vacuumCleaner = new Device(
  furniture.brand,
  furniture.name,
  furniture.color,
  furniture.weight,
  furniture.action,
  furniture.type,
  furniture.batteryLevel,
  furniture.status,
  furniture.autonomy,
  furniture.timeCycle,
  furniture.price[0],
  furniture.button
);

console.log(`🚀 ${vacuumCleaner?.getBrand()}, ${vacuumCleaner.getName()}`);
vacuumCleaner.charging();
vacuumCleaner.finalBatteryLevel();
