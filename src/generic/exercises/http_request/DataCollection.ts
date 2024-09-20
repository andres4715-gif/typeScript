import { ICreditCard, IPost } from './interfaces/interfaces';

type dataType = ICreditCard | IPost;

class FinancialInformation {
  private items: dataType[] = [];

  addItem(newCreditCard: dataType): void {
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
