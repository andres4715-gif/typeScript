export interface employeeData {
  name: string;
  lastName: string;
  years: number;
}

export interface finalData extends employeeData {
  employeeCode: string;
  area: string;
  experienceTime: number;
  salary: number;
}
