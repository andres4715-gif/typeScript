import { sellData } from './types';
import LoginAccount from './totalSells';

const data: sellData = {
  finalAmount: 20,
  finalCommission: 5,
};

const loginAccount = new LoginAccount(data.finalAmount, data.finalCommission);
console.log(`--- ✅ Final seller revenues ${loginAccount.applyCommission()}`);
