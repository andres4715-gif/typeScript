export abstract class Account {
  private amount: number;
  private commission: number;

  constructor(amount: number, commission: number) {
    this.amount = amount;
    this.commission = commission;
  }

  get getAmount(): number {
    return this.amount;
  }

  get getCommission(): number {
    return this.commission;
  }

  abstract applyCommission(): number;
}

// adding new things
