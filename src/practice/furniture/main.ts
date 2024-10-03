import { TFurniture } from './types/type';
import Device from './device';

const externalBatteryLevel = Device.batteryInitialLevel();

const vacuum: TFurniture = {
  brand: 'Xiaomi',
  name: 'vacuum cleaner',
  color: 'write',
  weight: 2,
  action: 'sweep',
  type: 'battery',
  batteryLevel: externalBatteryLevel,
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
  vacuum.brand,
  vacuum.name,
  vacuum.color,
  vacuum.weight,
  vacuum.action,
  vacuum.type,
  vacuum.batteryLevel,
  vacuum.status,
  vacuum.autonomy,
  vacuum.timeCycle,
  vacuum.price[0],
  vacuum.button
);

vacuumCleaner.charging();
console.log(`🚀 ${vacuumCleaner?.getBrand()}, ${vacuumCleaner.getName()}`);
vacuumCleaner.finalBatteryLevel();
