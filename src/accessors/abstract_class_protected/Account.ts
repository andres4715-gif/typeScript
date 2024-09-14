abstract class Account {
  protected amount: number = 20;
  protected commission: number = 40;

  addition() {
    console.log(`--- ✅ Amount = ${this.amount + this.commission}`);
  }

  protected abstract applyCommission(): number;
}

export default Account;
