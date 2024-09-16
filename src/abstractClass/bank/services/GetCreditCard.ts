import FinancialInformation from '../models/FinancialInformation';
import Persona from '../models/Persona';
import Withdrawal from '../models/Withdrawal';

const creditCardRequest = async () => {
  const response = await fetch('http://localhost:3000/creditCard');
  const dataResponse = await response.json();

  const financialInformationResponse = dataResponse.map((data: any) => {
    const withdrawals = data.withdrawals.map(
      (w: any) => new Withdrawal(w.date, w.amount)
    );

    const persona = new Persona(data.id, data.firstName, data.lastName);

    return new FinancialInformation(
      persona,
      data.dateOfJoining,
      data.dateOfWithdrawal,
      data.availableBalance,
      withdrawals,
      data.planType
    );
  });

  for (const key in financialInformationResponse) {
    const myResponse = financialInformationResponse[key];
    console.log('>>>>>>>', myResponse.persona.id);
  }
};

creditCardRequest();
