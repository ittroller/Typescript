abstract class Project {
  projectName: string = "default";
  budget: number;

  abstract changeName(name: string): void;

  calcBudget(): number {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    console.log(name);
  }
}

// ============== PRIVATE CONSTRUCTOR & SINGLETONS TS 2.0
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne("The Only One"); // error
// singleton is private and only accessible within the class declaration
let right = OnlyOne.getInstance();

// ==============

class Singleton {
  private static instance: Singleton;
  private _temperature: number;
  private constructor() {}
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
      Singleton.instance._temperature = 0;
    }
    return Singleton.instance;
  }
  get temperature(): number {
    return this._temperature;
  }
  set temperature(score) {
    this._temperature = score;
  }
  increaseTemperature(): number {
    return (this._temperature += 1);
  }
  decreaseTemperature(): number {
    return (this._temperature -= 1);
  }
}

//   const myInstance = new Singleton();
const myInstance = Singleton.getInstance();
console.log(myInstance.temperature); // 0
console.log((myInstance.temperature = 25)); // 25
console.log(myInstance.increaseTemperature()); // 26
console.log(myInstance.increaseTemperature()); // 27
console.log(myInstance.decreaseTemperature()); // 26

export {};
