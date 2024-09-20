import { ISendingData } from './interfaces/interfaces';

class FinancialInformation<T> implements ISendingData<T> {
  private items: T[] = [];

  addItem(newData: T): void {
    this.items.push(newData);
  }

  getItemAdded() {
    console.log(
      `--- ✅✅✅ New data to be added: \n`,
      JSON.stringify(this.items, null, 2)
    );
  }
}

export default FinancialInformation;
