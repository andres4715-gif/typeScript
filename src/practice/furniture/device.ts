import Furniture from './models/furniture';

class Device extends Furniture {
  charging(): void {
    if (this.sweeping() === true) {
      console.log(
        `❌ ${this.getName()} is working and is not possible charging it.`
      );
    } else {
      console.log(`✅ ${this.getName()} is connected and charging...`);
    }
  }
}

export default Device;
