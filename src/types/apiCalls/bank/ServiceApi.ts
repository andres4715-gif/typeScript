import { Persona } from './types/persona';

const creditCardRequest = async (): Promise<Persona[]> => {
  const response = await fetch('http://localhost:3000/creditCard');
  const data: Persona[] = await response.json();
  return data;
};

const response = async () => {
  const gettingResponse = await creditCardRequest();
  console.log(gettingResponse);
};

const main = () => {
  response();
};

main();
