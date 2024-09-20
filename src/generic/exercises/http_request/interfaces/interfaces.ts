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

export interface IPost {
  id: string;
  title: string;
  views: number;
  author: IAuthor;
}

interface IAuthor {
  description: string;
  firstName: string;
  lastName: string;
  id: string;
}

export interface IComment {
  id: string;
  text: string;
  postId: string;
  author: IAuthorComment;
}

interface IAuthorComment {
  name: string;
  lastName: string;
  city: string;
  description: string;
}
