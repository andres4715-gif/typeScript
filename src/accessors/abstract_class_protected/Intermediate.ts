import LoginAccount from './LoginAccount';

export default class Intermediate extends LoginAccount {
  myMethod(): number {
    return this.applyCommission()
  }

  printAddition() {
    return this.addition();
  }
}
