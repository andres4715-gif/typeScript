import Account from '../models/Account';
import Persona from '../models/Persona';
import Withdrawal from '../models/Withdrawal';
import { IWithdrawal, IPersona, IAccount } from '../interfaces/interfaces';

const accountRequest = async () => {
  const response = await fetch('http://localhost:3000/creditCard', {
    method: 'GET',
  });
  const jsonData = await response.json();

  const accountDataResponse = jsonData.map((data: IAccount) => {
    // Getting withdrawals
    const withdrawals = data.withdrawals.map(
      (w: IWithdrawal) => new Withdrawal(w.date, w.amount)
    );

    // Getting Persona
    const persona: IPersona = new Persona(
      data.id,
      data.firstName,
      data.lastName
    );

    return new Account(
      persona,
      data.dateOfJoining,
      data.dateOfWithdrawal,
      data.availableBalance,
      withdrawals,
      data.planType
    );
  });

  for (const key in accountDataResponse) {
    const myResponse = accountDataResponse[key];
    console.log('--- ✅ id:', myResponse.persona.id);
  }
};

const main = () => {
  accountRequest();
};

main();
