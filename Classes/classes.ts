class Vehicle {
  drive(): void {
    console.log("abc");
  }
}
const vehicle = new Vehicle();
vehicle.drive();

// class Car extends Vehicle {}
class Car extends Vehicle {
  drive(): void {
    console.log("xyz");
  }
}

const car = new Car();
car.drive();

// ------

class User {
  private ear(): void {
    console.log("ear");
  }
  ear1(): void {
    this.ear();
  }

  protected move(): void {
    console.log("move");
  }
  move1(): void {
    this.move();
  }

  eat(): void {
    console.log("abc");
  }

  private eat1(): void {
    console.log("EAT");
  }
  protected eat2(): void {
    this.eat1();
  }
  eat3(): void {
    this.eat2();
  }
}
const user = new User();
user.eat();
// user.ear() // err
// user.move() // err
user.move1();
// user.eat1(); // err
// user.eat2(); // err
user.eat3();

class Employee extends User {
  emp1(): void {
    // this.ear();
    this.ear1();
    this.move();
  }

  move(): void {
    console.log("122");
  }

  // Không thể ghi đè hàm private
  //   ear(): void {
  //     console.log("123");
  //   }

  eat2(): void {
    console.log(124);
  }
}

const employee = new Employee();

employee.emp1();
employee.move();
employee.eat2();

export {};
