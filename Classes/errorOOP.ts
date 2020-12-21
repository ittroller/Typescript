class User {
  public name: string;

  constructor(name: string) {
    if (!!name === false) {
      throw new Error("Ya need to include a name");
    }

    this.name = name;
  }
}

let user;

try {
  user = new User();
} catch (err) {}

console.log(user); // undefined
