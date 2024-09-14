abstract class Person {
  // is not necessary to create a constructor because this abstract properties are not visible on within constructor
  protected abstract name: string;
  protected abstract lastName: string;
  protected abstract years: number;

  showData(): string {
    const fullName = `${this.name} ${this.lastName}`;
    return fullName;
  }

  abstract disciplinaryProcess(pendingProcess: number): number;
}

export default Person;
