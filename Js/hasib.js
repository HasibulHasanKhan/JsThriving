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

class Person {
  constructor(age) {
    this._age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value === "number" && value > 0 && value < 120) {
      this._age = value;
    } else {
      console.log("Invalid age. Age must be number between 1 and 120");
    }
  }
}

const person = new Person(25);
console.log(person.age);
person.age = -54;

console.log(person.age);
