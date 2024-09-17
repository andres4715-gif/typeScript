export interface IWithdrawal {
  date: string;
  amount: number;
}

export interface IPersona {
  id: string;
  firstName: string;
  lastName: string;
}

export interface IAccount extends IPersona, IWithdrawal {
  dateOfJoining: string;
  dateOfWithdrawal: string;
  availableBalance: number;
  withdrawals: IWithdrawal[];
  planType: string;
}
