import { Sale } from './sales';

export class SaleWithTax extends Sale {
  protected finalSellAmount: number;

  constructor(finalSellAmount: number, amount: number) {
    super(amount);
    this.finalSellAmount = finalSellAmount;
  }

  makingSaleWithTask(): number {
    const addition = this.amount;
    return addition;
  }
}

export default SaleWithTax;
