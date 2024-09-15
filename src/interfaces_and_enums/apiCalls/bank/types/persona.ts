import { Withdrawal } from './Withdrawal';

export interface Persona {
  id: string;
  firstName: string;
  lastName: string;
  dateOfJoining: string;
  dateOfWithdrawal: string;
  availableBalance: number;
  withdrawals: Withdrawal[];
  planType: string;
}
