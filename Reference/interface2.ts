interface User {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}
function greetUser(person: User) {
  console.log(person.firstName);
}
function changeNameUser(person: User) {
  person.firstName = "New name";
}
const user = {
  firstName: "A B C",
  age: 18,
  greet(lastName: string) {
    console.log("hi " + this.firstName + " - " + lastName);
  },
};
user.greet("D E F");

/* --------------------- */
console.log("==========================");
/* --------------------- */

interface DoubleValueFunc {
  (n1: number, n2: number): number;
}
let myDoubleFunc: DoubleValueFunc;
myDoubleFunc = function (x: number, y: number) {
  return x * y;
};
console.log(myDoubleFunc(2, 3));

/* --------------------- */
console.log("==========================");
/* --------------------- */

interface Account {
  username: string;
  password: string;
}

interface Garena extends Account {
  email: string;
}

const accountLOL: Garena = {
  username: "ittroller",
  password: "ABC123",
  email: "ittroller8@gmail",
};

console.log(accountLOL);

export {};
