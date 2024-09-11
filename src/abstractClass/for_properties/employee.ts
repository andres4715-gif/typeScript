import Employee from './personImplementation';
import { employeeData } from './types';

const data: employeeData = {
  name: 'Juan',
  lastName: 'Perez',
  years: 43,
  employeeCode: '2324565J',
  area: 'production',
  experienceTime: 10,
  salary: 1000,
};

const employee = new Employee(
  data.name,
  data.lastName,
  data.years,
  data.employeeCode,
  data.area,
  data.experienceTime,
  data.salary
);

employee.toBePromoted();
const employeeData = employee.showData();
console.log(`---😎 Employee Name: ${employeeData}`);
