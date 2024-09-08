import Person from './person';

class Employee extends Person {
  name: string;
  lastName: string;
  years: number;
  employeeCode: string;
  area: string;
  experienceTime: number;
  salary: number;

  constructor(
    name: string,
    lastName: string,
    years: number,
    employeeCode: string,
    area: string,
    experienceTime: number,
    salary: number
  ) {
    super();
    this.name = name;
    this.lastName = lastName;
    this.years = years;
    this.employeeCode = employeeCode;
    this.area = area;
    this.experienceTime = experienceTime;
    this.salary = salary;
  }

  toBePromoted() {
    const fails = this.disciplinaryProcess();
    if (this.area === 'production' && this.experienceTime > 3 && fails === 0) {
      const newSalary = this.salary + 100;
      console.log(`---✅ You rock: Your new salary is: ${newSalary}`);
      return newSalary;
    } else {
      console.log('---❌ You don not have any promotion right now ');
    }
  }

  disciplinaryProcess(): number {
    return 0;
  }
}

export default Employee;
