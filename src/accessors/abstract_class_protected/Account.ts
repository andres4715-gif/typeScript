export default abstract class Account {
  protected amount: number = 10;
  protected commission: number = 35;

  addition(): void {
    console.log(`--- ✅ Amount = ${this.amount + this.commission}`);
  }

  protected abstract applyCommission(): number;
}
