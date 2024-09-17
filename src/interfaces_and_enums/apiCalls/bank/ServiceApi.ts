import { Persona } from './types/persona';

const creditCardRequest = async (): Promise<Persona[]> => {
  const dataRequest = await fetch('http://localhost:3000/creditCard');
  const jsonData: Persona[] = await dataRequest.json();
  return jsonData;
};

const response = async () => {
  const response = await creditCardRequest();
  console.log(response);
};

const main = () => {
  response();
};

main();
