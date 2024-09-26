import Sale from './sales';

class SaleWithTax extends Sale {
  protected taxes: number;

  constructor(taxes: number, sellAmount: number) {
    super(sellAmount);
    this.taxes = taxes;
  }

  makingSaleWithTask(): number {
    const finalCalculation: number = this.calculation();
    return finalCalculation;
  }

  calculation(): number {
    const data: number = this.selling();
    const finalCalculation: number = data * this.taxes + data;
    return finalCalculation;
  }
}

export default SaleWithTax;
