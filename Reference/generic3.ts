function helloWorld2<T>(arg: T): T {
  return arg;
}

const printHello: <T>(data: T) => T = helloWorld2;

console.log(printHello<string>("HELLO"));
console.log(printHello<number>(123));

// =====================================

// class MyMath<T> {
//   val: T;
//   multiVal: T;
//   calc(): number {
//     return +this.val * +this.multiVal;
//   }
// }
// const myMath = new MyMath<number>();
// myMath.val = 2;
// myMath.multiVal = 3;
// console.log(myMath.calc());

class MyMath<T extends number | string, U extends number | string> {
  val: T;
  multiVal: U;
  calc(): number {
    return +this.val * +this.multiVal;
  }
}
const myMath = new MyMath<string, number>();
myMath.val = "2";
myMath.multiVal = 3;
console.log(myMath.calc());
