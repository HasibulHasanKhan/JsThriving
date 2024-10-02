// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";
//----------------------------
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// const myCar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = myCar.show();
//------------------------------------
//Object.assign(target, source)
// Copies properties from a source object to a target object.
//..........................
const person1 = {
  firstName: "Hasib",
  lastName: "Hasan",
  age: 50,
  eyeColor: "blue",
};

const person2 = {
  firstName: "Sabbir",
  lastName: "Ahmed",
};

Object.assign(person1, person2);

let text = Object.entries(person1);
console.log(text);
