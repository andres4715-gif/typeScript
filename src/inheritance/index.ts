import { SaleWithTax } from './saleWithTax';

const sale = 20;
const tax = 10;

const saleWithTask = new SaleWithTax(tax, sale);
const finalFinal: number = saleWithTask.makingSaleWithTask();
console.log('--- Initial Sale: ', sale);
console.log('--- ✅ Total Sale with tax: ', finalFinal);
