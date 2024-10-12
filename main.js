// function findMaxMin(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return { max, min };
// }
// const numbers = [5, 2, 8, 1, 9];
// const result = findMaxMin(numbers);
// console.log(result);
// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// // Example Usage:
// const array = [10, 2, 2, 31, 4, 4, 5];
// console.log(removeDuplicates(array)); // Output: [1, 2, 3, 4, 5]
// function arrayIntersection(arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item));
// }
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// console.log(arrayIntersection(array1, array2));
