// let numbers = [40, 100, 1, 5, 25, 10];

// numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(numbers);
// let words = ["apple", "banana", "mango", "cherry"];

// words.sort(function (a, b) {
//   return a.length - b.length;
// });
// console.log(words);
//----------------------------------------
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, bread) {
//     super(name);
//     this.bread = bread;
//   }
//   showBread() {
//     console.log(`${this.name} is a ${this.bread}`);
//   }
// }

// let dog = new Dog("Buddy", "Golden");
// dog.speak();
// dog.showBread();
///------------------------------------------------
// class BankAccount {
//   #balance = 0;
//   deposit(amount) {
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.log("Insufficient funds");
//     } else {
//       this.#balance -= amount;
//     }
//   }
//   getBalance() {
//     return this.#balance;
//   }
// }

// let account = new BankAccount();
// account.deposit(100);
// console.log(account.getBalance());
// account.withdraw(20);
// console.log(account.getBalance());

// class Person {
//   constructor(age) {
//     this._age = age;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(value) {
//     if (typeof value === "number" && value > 0 && value < 120) {
//       this._age = value;
//     } else {
//       console.log("Invalid age. Age must be number between 1 and 120");
//     }
//   }
// }

// const person = new Person(25);
// console.log(person.age);
// person.age = -54;

// console.log(person.age);
// class DataFetcher {
//   constructor() {
//     this._data = null; // Initially no data
//   }

//   // Lazy-loaded getter for data
//   get data() {
//     if (this._data === null) {
//       console.log("Fetching data...");
//       this._data = this.fetchData(); // Simulating fetching data
//     }
//     return this._data;
//   }

//   fetchData() {
//     // Simulate data fetching
//     return { value: "Some data from API" };
//   }
// }

// const fetcher = new DataFetcher();

// console.log(fetcher.data); // Output: Fetching data... { value: 'Some data from API' }
// console.log(fetcher.data); // Output: { value: 'Some data from API' } (cached, no fetch)
// class BankAccount {
//   #balance;
//   constructor(initilaBalance) {
//     this.#balance = initilaBalance;
//   }
//   get balance() {
//     return this.#balance;
//   }

//   set balance(newBalance) {
//     if (newBalance >= 0) {
//       this.#balance = newBalance;
//     } else {
//       console.log("Balance cannot be negative");
//     }
//   }
// }
// const account = new BankAccount(1000);
// console.log(account.balance);
// account.balance = 200;
// console.log(account.balance);
//for(pre-test loop can control initializaion and increment and incremint)
// while(Loop until condition is false)
// do....while(run loop at least once, then check condition)
//for...in(Iterate over object properties with key)
//for...of(Iterate over values in iterable objects (arrays, strings))
//forEach(Execute a function for every array element)
