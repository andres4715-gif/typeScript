import { SaleWithTax } from './saleWithTax';

let sale1 = 20;
const tax = 0.19;

const saleWithTask = new SaleWithTax(tax, sale1);
const finalFinal = saleWithTask.makingSaleWithTask();
console.log('--- Initial Sale: ', sale1);
console.log('--- ✅ Total Sale with tax: ', finalFinal);
