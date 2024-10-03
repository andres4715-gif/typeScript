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

const radio: TFurniture = {
  brand: 'LG',
  name: 'Living room Radio',
  color: 'Black',
  weight: 1,
  action: 'Reproduce Music',
  type: 'battery',
  batteryLevel: externalBatteryLevel,
  status: true,
  autonomy: 90,
  timeCycle: 20,
  price: [
    {
      size: 'small',
      finalPrice: 100,
    },
    {
      size: 'big',
      finalPrice: 550,
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

const blueToothRadio = new Device(
  radio.brand,
  radio.name,
  radio.color,
  radio.weight,
  radio.action,
  radio.type,
  radio.batteryLevel,
  radio.status,
  radio.autonomy,
  radio.timeCycle,
  radio.price[0],
  radio.button
);

// Vacuum
vacuumCleaner.charging();
console.log(`🚀 ${vacuumCleaner?.getBrand()}, ${vacuumCleaner.getName()}`);
vacuumCleaner.finalBatteryLevel();

// Radio
blueToothRadio.charging();
console.log(`🚀 ${blueToothRadio?.getBrand()}, ${blueToothRadio.getName()}`);
blueToothRadio.finalBatteryLevel();
