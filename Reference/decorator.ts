// function logged(constructorFunc: Function) {
//   console.log(constructorFunc);
// }

// @logged
// class Person {
//   constructor() {
//     console.log("PERSON");
//   }
// }

// // Factory
// function logging(value: boolean) {
//   return value ? logged : null;
// }

// @logging()
// class Car {}

// ADVANCED

function printTable(constructorFunc: Function) {
  constructorFunc.prototype.print = function () {
    console.log(this);
  };
}
@printTable
class Plant {
  name = "Green";
}

const plant = new Plant();
(<any>plant).print();

export {};
