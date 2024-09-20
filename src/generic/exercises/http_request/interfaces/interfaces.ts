interface IPersona {
  id: string;
  firstName: string;
  lastName: string;
}

interface IWithdrawal {
  date: string;
  amount: number;
}

export interface ICreditCard extends IPersona {
  dateOfJoining: string;
  dateOfWithdrawal: string;
  withdrawals: IWithdrawal[];
  availableBalance: number;
  planType: string;
}
