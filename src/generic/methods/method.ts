function gettingData<T>(data: T): T {
  return data;
}

const myObject = {
  firstName: 'Andres',
  lastName: 'Rios',
  bank: 'Bank XXX',
  city: 'Canada',
};

const data1 = gettingData<string>('Hello world!!'); // Sending a string.
const data2 = gettingData<number>(8); // Sending a number.
const data3 = gettingData<object>({
  name: 'Juan',
  lastName: 'Estrada',
  age: 45,
}); // Sending an object.
const data4 = gettingData<object>([2, 3, 4, 5, 6]); // Sending an object (ARRAY):
const data5 = gettingData<boolean>(true); // Sending a boolean
const data6 = gettingData<object>(myObject); // Sending an object.

// Printing:
console.log('Data 1: ', typeof data1);
console.log('Data 2: ', typeof data2);
console.log('Data 3: ', typeof data3);
console.log('Data 3: ', data3);
console.log('Data 4: ', typeof data4);
console.log('Data 5: ', typeof data5);
console.log('Data 6: ', typeof data6);
console.log('Data 6: ', data6);
