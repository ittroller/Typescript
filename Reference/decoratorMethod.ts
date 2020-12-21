class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
function enumerable(value: boolean) {
  console.log(value);
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    target.hello = function () {
      console.log("Hello XXX");
    };
    console.log(2, propertyKey);
    console.log(3, descriptor);
    descriptor.enumerable = value;
  };
}

const a = new Greeter("abc");
console.log(a.greet());
a.hello();

// Method decorator được khai báo với 3 params:
// – Target: class chứa method đó
// – Tên member được decorate (chính là tên method)
// – Property descriptor
