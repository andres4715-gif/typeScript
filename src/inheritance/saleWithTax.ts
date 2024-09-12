import { Sale } from './sales';

export class SaleWithTax extends Sale {
  protected taxes: number;

  constructor(taxes: number, sellAmount: number) {
    super(sellAmount);
    this.taxes = taxes;
  }

  makingSaleWithTask(): number {
    const finalCalculation = this.calculation();
    return finalCalculation;
  }

  calculation() {
    const data = this.selling();
    const finalCalculation: number = data * this.taxes + data;
    return finalCalculation;
  }
}

export default SaleWithTax;
