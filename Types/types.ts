const num: number = 3;
const str: string = "abc";
const bool: boolean = true;

const noThingMuch: null = null;

const nothing: undefined = undefined;

// built in objects: Date, Object ...
const date: Date = new Date();

const arr: string[] = ["12", "aasc"];
const arr1: any[] = [1, "abc", true];

// classes
class Car {}

const newCar: Car = new Car();

// object literal
const point: { x: number; y: number } = {
  x: 1,
  y: 2,
};

// function
const func: (i: number) => void = (i: number) => {
  console.log(i);
};

// ----when to use annotations
// 1, function that returns the 'any' type
const json = '{"x": 10, "y": 19}';
//const parseJson = JSON.parse(json); // type is any
const parseJson: { x: number; y: number } = JSON.parse(json); // fixed
console.log(json);

// 2, when we declare a variable on one line and initalizate it later\
let words = ["1", "2", "3"];
// let foundWord; //type is any
let foundWord: boolean;
for (let i = 0; i <= words.length; i++) {
  if (words[i] === "2") {
    foundWord = true;
  }
}

// 3, variable whose type cannot be inferred correctly
let numb = [-2, 1, 2];
// let numbAss = false; // error when set different type
let numbAss: boolean | number = false;

for (let i = 0; i < numb.length; i++) {
  if (numb[i] > 0) {
    numbAss = numb[i];
  }
}

let canBeNull = 12;
canBeNull = null;

let canAlsoBeNull;
canAlsoBeNull = null;

let canThisBeAny = null;
canThisBeAny = 12;

export {};
