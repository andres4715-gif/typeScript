import Persona from './Persona';
import Withdrawal from './Withdrawal';

class Account {
  persona: Persona;
  dateOfJoining: string;
  dateOfWithdrawal: string;
  availableBalance: number;
  withdrawals: Withdrawal[];
  planType: string;

  constructor(
    persona: Persona,
    dateOfJoining: string,
    dateOfWithdrawal: string,
    availableBalance: number,
    withdrawals: Withdrawal[],
    planType: string
  ) {
    this.persona = persona;
    this.dateOfJoining = dateOfJoining;
    this.dateOfWithdrawal = dateOfWithdrawal;
    this.availableBalance = availableBalance;
    this.withdrawals = withdrawals;
    this.planType = planType;
  }
}

export default Account;
