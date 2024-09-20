import FinancialInformation from './DataCollection';
import { ICreditCard, IPost } from './interfaces/interfaces';

/*exercise:
https://www.youtube.com/watch?v=SKvd4n4rVKw&t=601s

1- Create a generic class to address interfaces 
for existing API service:
http://localhost:3000/posts/
http://localhost:3000/comments/
http://localhost:3000/profile/
http://localhost:3000/creditCard

2- Create new data in all of them 
3- Print in console the new data added 
4- Remove new data added using delete http request
*/

const creditCard = new FinancialInformation();
const post = new FinancialInformation();

const newCreditCard: ICreditCard = {
  id: '123e4567-e89b-12d3-a456-454546576767',
  firstName: 'John',
  lastName: 'Doe second',
  dateOfJoining: '2015-06-15',
  dateOfWithdrawal: '2023-01-10',
  availableBalance: 57886,
  withdrawals: [
    {
      date: '2023-01-05',
      amount: 150,
    },
    {
      date: '2023-01-08',
      amount: 200,
    },
  ],
  planType: 'BASIC ADVANCE',
};

const newPost: IPost = {
  id: 'mN9o0pQ1rS2t45yu',
  title: 'A better life',
  views: 300,
  author: {
    description: 'Developer engaged',
    firstName: 'Max',
    lastName: 'Vina',
    id: 'tYpIcOdE',
  },
};

// Credit Card
creditCard.addItem(newCreditCard);
creditCard.getItemAdded();

// Posts
post.addItem(newPost);
post.getItemAdded();
