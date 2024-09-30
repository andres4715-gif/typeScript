export class People {
  constructor(name: string, birthday: number, year: number) {
    this.name = name;
    this.birthday = birthday;
    this.year = year;
  }
  private name: string;
  private birthday: number;
  private year: number;

  // Getters
  public getName(): string {
    return this.name;
  }

  public getBirthday(): number {
    return this.birthday;
  }

  public getYear(): number {
    return this.year;
  }

  // Setters
  public setName(name: string): void {
    this.name = name;
  }

  public setBirthday(birthday: number): void {
    this.birthday = birthday;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  protected age() {
    const myAge = this.getYear() - this.getBirthday();
    console.log(`${this.name}: is ${myAge} years old...`);
  }
}
