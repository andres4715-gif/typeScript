import Account from './Account';

class LoginAccount extends Account {
  applyCommission(): number {
    return this.amount + this.commission;
  }
}

export default LoginAccount;
