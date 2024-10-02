// Object.entries(object)
// Returns am array of the key/value pairs of an object.
//---------------------------------------
// const fruits = ["Banana", "Orange", "Apples", "Mangoes"];
// let [fruit1, fruit2] = fruits;
// console.log(` ${fruit1} and  ${fruit2}`);
//-----------------------------------------
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ":" + amount + "\n";
}
console.log(text);
