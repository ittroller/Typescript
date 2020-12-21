@sealed
class Student {
  stdName: string;
  constructor(message: string) {
    this.stdName = message;
  }
  greet() {
    return "Hello, " + this.stdName;
  }
}
function sealed(constructor: Function) {
  // console.log();
  Object.seal(constructor);
  // console.log(Object.seal(constructor.prototype));
}

const student = new Student("Alice");
console.log(student.greet());

export {};
