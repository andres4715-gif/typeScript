import { Sale } from './sales';
import { SaleWithTax } from './saleWithTax';

let sale1 = 2;

const saleWithOutTask = new Sale(sale1);
const final = saleWithOutTask.selling();

const saleWithTask = new SaleWithTax(final, final * 0.19);
const finalFinal = saleWithTask.makingSaleWithTask();
console.log('--- Initial Sale: ', final);
console.log('--- ✅ Total Sale with tax: ', final + finalFinal);
