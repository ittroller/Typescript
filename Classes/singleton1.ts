// We'll start by modifying our class
class UserService {
  static instance: UserService;

  user?: { name: string };

  constructor() {
    if (!UserService.instance) {
      UserService.instance = this;
    }

    return UserService.instance;
  }

  logName() {
    console.log(`Hi, my name is: ${this.user?.name}`);
  }
}

// Now we will use our service to handle
// Two different users of our app

const myService = new UserService();
myService.user = { name: "Colum" };
myService.logName();
const differentService = new UserService();
differentService.user = { name: "John" };
differentService.logName();
const differentService0 = new UserService();
differentService0.user = { name: "PPPP" };
differentService0.logName();
console.log("====");
myService.logName();
differentService.logName();
differentService0.logName();
