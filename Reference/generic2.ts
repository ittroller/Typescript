// tham số có thể truyền vào bất cứ kiểu dữ liệu gì
// nhưng việc xử lý các tham số bên trong hàm sẽ khó
// function helloWorld(arg: any): any {
//   return arg;
// }

// thay vào đó, dùng generic
// thông thường sẽ là T - Type variable
function helloWorld2<T>(arg: T): T {
  return arg;
}

// muốn làm việc với function bằng kiểu dữ liệu string
let output = helloWorld2<string>("myString");

// CLASS ==========================
class AddGeneric<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

// number
let addNumber = new AddGeneric<number>();
addNumber.zeroValue = 0;
addNumber.add = function (x, y) {
  return x + y;
};
console.log(addNumber.add(addNumber.zeroValue, 1)); // return 1

// string
let addString = new AddGeneric<string>();
addString.zeroValue = "";
addString.add = function (x, y) {
  return x + y;
};

console.log(addString.add(addString.zeroValue, "a")); // return 'a'

// NOTICE =========================

// dù T có thể là bất kỳ kiểu dữ liệu gì
// nhưng .length của number k tồn tại

/* 
function loggingLength1<T>(arg: T): T {
    console.log(arg.length); // Property 'length' does not exist on type 'T'.
    return arg;
}
*/

// RESOLVE
interface Lengthwise {
  length: number;
}

function loggingLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// loggingLength(1); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
loggingLength("a"); // return 1
loggingLength({ length: 1, value: 1 }); // return 1

/* 
================ type parameters in generic constraints
*/

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// getProperty(x, "m");

/* 
================ class types in generic
*/

function create<T>(c: { new (): T }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

export {};
