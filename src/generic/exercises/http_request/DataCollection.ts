import { ICreditCard } from './interfaces/interfaces';

class FinancialInformation {
  private items: ICreditCard[] = [];

  addItem(newCreditCard: ICreditCard): void {
    this.items.push(newCreditCard);
  }

  getItemAdded() {
    console.log(
      `--- ✅✅✅ New Credit card data: \n`,
      JSON.stringify(this.items, null, 2)
    );
  }
}

export default FinancialInformation;
