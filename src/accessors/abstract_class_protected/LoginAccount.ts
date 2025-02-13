import Account from './Account';

export default class LoginAccount extends Account {
  applyCommission(): number {
    return this.amount + this.commission;
  }
}
