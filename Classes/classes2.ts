class Car {
  //   color: string = "red";

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  constructor(public color: string) {}

  protected printCar(): void {
    console.log("Color: ");
  }
}

const bwm = new Car("red");
console.log(bwm.color);

// ---------

class Verhicle extends Car {
  constructor(public number: number, public color: string) {
    super(color);
  }

  printVerhicle(): void {
    console.log(this.number, this.color);
  }
}

const verhicle = new Verhicle(1, "green");
verhicle.printVerhicle();
