import Furniture from './models/furniture';

class Device extends Furniture {
  charging(): void {
    if (this.sweeping() === true) {
      console.log(`❌ ${this.getName()} is working discharging Battery...`);
    } else {
      console.log(`✅ ${this.getName()} charging Battery...`);
    }
  }

  finalBatteryLevel(): number | undefined {
    console.warn(`⚙️ Initial Battery level ${this.getBatteryLevel()}`);
    if (this.getStatus() !== true) {
      console.log(
        `🔌 Charging ${this.getName()} ${this.getBatteryLevel()} +++`
      );
    } else {
      const batteryLevel: number = this.getBatteryLevel();
      const autonomy: number = this.getAutonomy();
      const timeCycle: number = this.getTimeCycle();

      const finalBatteryLevel = autonomy - (batteryLevel - timeCycle);
      console.log(`📍 Discharging ${this.getName()} ${finalBatteryLevel}`);
      return finalBatteryLevel;
    }
  }
}

export default Device;
