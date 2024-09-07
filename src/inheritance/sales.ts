export class Sale {
  protected amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  selling(): number {
    return this.amount;
  }
}

export default Sale;
