export class Sale {
  protected sellAmount: number;

  constructor(sellAmount: number) {
    this.sellAmount = sellAmount;
  }

  selling(): number {
    return this.sellAmount;
  }
}

export default Sale;
