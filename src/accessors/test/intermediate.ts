import { People } from './people';

export class Intermediate extends People {
  data() {
    return this.age();
  }
}
