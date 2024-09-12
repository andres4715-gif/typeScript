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
    const addition: number = this.sellAmount * this.taxes + this.sellAmount;
    return addition;
  }
}

export default SaleWithTax;
