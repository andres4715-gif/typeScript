import LoginAccount from './loginAccount';

class Intermediate extends LoginAccount {
  myMethod() {
    const data = this.applyCommission();
    return data;
  }

  printAddition() {
    const myAddition = this.addition();
    return myAddition;
  }
}

export default Intermediate;
