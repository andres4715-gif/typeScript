abstract class Person {
  // is not necessary to create a constructor because this abstract properties are not visible on within constructor
  abstract name: string;
  abstract lastName: string;
  abstract years: number;

  showData(): string {
    const fullName = `${this.name} ${this.lastName}`;
    return fullName;
  }

  abstract disciplinaryProcess(): number;
}

export default Person;
