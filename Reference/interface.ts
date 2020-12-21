// interface Person {
//   firstName: string;
// }

interface Person {
  firstName: string;
  age?: number;
}

function greet(person: Person) {
  console.log(person.firstName);
}

function changeName(person: Person) {
  person.firstName = "New name";
}

const person = {
  firstName: "A B C",
  age: 18,
};

greet(person);

// error

// vì interface đòi hỏi chính xác các thuộc tính, phương thức bên trong nó
// khi truyền như này, JS sẽ hiểu đây là cách truyền Object literal (đối tượng thuộc nghĩa đen - đối tượng trực tiếp)
// khi này JS sẽ check thuộc tính, được khai báo ở interface và ở object kia
// object kia thừa thuộc tính -> fail

// sửa interface thì sẽ có kết quả đúng và đơn giản
greet({
  firstName: "A B C",
  age: 18,
});

changeName(person);

greet(person);

// ================================
console.log("================================");
// ================================

interface User {
  firstName: string;
  age?: number;
  [propName: string]: any;
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
};

const user1 = {
  firstName: "A B C",
  age: 18,
  abcdef: ["2", "3"],
};

greetUser(user);
greetUser(user1);

changeNameUser(user);

greetUser(user);

export {};
