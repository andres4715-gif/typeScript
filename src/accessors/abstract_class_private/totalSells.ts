import Account from './sells';

class LoginAccount extends Account {
  applyCommission(): number {
    return this.getAmount + this.getCommission;
  }
}

export default LoginAccount;
