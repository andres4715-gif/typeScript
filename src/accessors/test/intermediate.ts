import {People} from './people';

export class Intermediate extends People {
  data(): void {
    return this.age();
  }
}
