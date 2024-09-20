import { ICreditCard, IPost } from './interfaces/interfaces';

type dataType = ICreditCard | IPost;

class FinancialInformation {
  private items: dataType[] = [];

  addItem(newCreditCard: dataType): void {
    this.items.push(newCreditCard);
  }

  getItemAdded() {
    console.log(
      `--- ✅✅✅ New data to be added: \n`,
      JSON.stringify(this.items, null, 2)
    );
  }
}

export default FinancialInformation;
