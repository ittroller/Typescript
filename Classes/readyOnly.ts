class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

let right = OnlyOne.getInstance();
console.log(right.name);
