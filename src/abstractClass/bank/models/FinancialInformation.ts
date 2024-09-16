import Persona from './Persona';
import Withdrawal from './Withdrawal';

class FinancialInformation {
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
  persona: Persona;
  dateOfJoining: string;
  dateOfWithdrawal: string;
  availableBalance: number;
  withdrawals: Withdrawal[];
  planType: string;
}

export default FinancialInformation;
