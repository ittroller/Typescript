// string[]
const list = ["1", "2", "3"];

// built function []
const list2 = [new Date(), new Date()];

// string[][]
const list3 = [
  ["1", "2", "3"],
  ["3", "4", "5"],
];

// (string | number)[][]
const list4 = [
  ["1", "2", "3"],
  ["3", 111, "5"],
];

// (string | number[])[]
const list5 = [111, ["1", "2", "3"], ["3", "4", "5"]];

// (number | (string | number)[]) []
const list6 = [111, ["1", "2", "3"], ["3", 111, "5"]];
