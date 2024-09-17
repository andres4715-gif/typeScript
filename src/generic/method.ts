function gettingData<T>(data: T): T {
  return data;
}

const myObject = {
  firstName: 'Andres',
  lastName: 'Rios',
  bank: 'Bank XXX',
};

const data1 = gettingData('Hello world!!'); // Sending a string.
const data2 = gettingData(8); // Sending a number.
const data3 = gettingData({ name: 'Juan', lastName: 'Estrada', age: 45 }); // Sending an object.
const data4 = gettingData([2, 3, 4, 5, 6]); // Sending an object (ARRAY):
const data5 = gettingData(true); // Sending a boolean
const data6 = gettingData(myObject); // Sending an object.

// Printing:
console.log('Data 1: ', typeof data1);
console.log('Data 2: ', typeof data2);
console.log('Data 3: ', typeof data3);
console.log('Data 4: ', typeof data4);
console.log('Data 5: ', typeof data5);
console.log('Data 6: ', typeof data6);
console.log('Data 6: ', data6);
