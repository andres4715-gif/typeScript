class FinancialInformation<T> {
  private items: T[] = [];

  addItem(newCreditCard: T): void {
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
