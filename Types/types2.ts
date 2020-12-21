// is operator

// thay vì khai báo kiều trả về
// is sẽ check kiểu dữ liệu của tham số truyền vào
// giới hạn phạm vi check type

function isString(test: any): test is string {
  return typeof test === "string";
}

function example(foo: any) {
  console.log(1111, isString(foo));
  if (isString(foo)) {
    console.log(typeof foo);
    console.log("it is a string" + foo);
    console.log(foo.length); // string function
    // console.log(foo.toExponential(2));
  }
}
example(1);

// ==========================
// Optional Chaining

/*

// Before
if (foo && foo.bar && foo.bar.baz) {
  // ...
}

// After-ish
if (foo?.bar?.baz) {
  // ...
}

*/

// =========================

// Nullish Coalescing ??
// với || thì các giá trị sẽ được check có, ép kiểu và check kiểu
// ?? chỉ so sánh giá trị nếu có

/* 

config.name = config.name ?? "(no name)";
config.items = config.items ?? -1;
config.active = config.active ?? true;

// Current solution
config.name = typeof config.name === "string" ? config.name : "(no name)";
config.items = typeof config.items === "number" ? config.items : -1;
config.active = typeof config.active === "boolean" ? config.active : true;

// Using || operator which could give bad data
config.name = config.name || "(no name)"; // does not allow for "" input
config.items = config.items || -1; // does not allow for 0 input
config.active = config.active || true; // really bad, always true

*/
