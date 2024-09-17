import { Withdrawal } from './Withdrawal';

export type Persona = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfJoining: string;
  dateOfWithdrawal: string;
  availableBalance: number;
  withdrawals: Withdrawal[];
  planType: string;
};
