// // // var name; //  if something is not assigned by the developer then JS will by default assign UNDEFINED to that variable
// // // console.log(name);
// // // let age = null;
// // // console.log(age);

// // let obj = {
// //   name: "Wasi",
// //   class1: "BCA",
// //   age: 90,
// // };

// // let { name, age, class1 } = obj;
// // console.log(name, age, class1);

// // let arr = [
// //   1,
// //   "2",
// //   false,
// //   4,
// //   5,
// //   "Wasi",
// //   7,
// //   8,
// //   {
// //     name: "Wasi",
// //     class: "BCA",
// //   },
// // ];

// // // for (let i = 0; i < arr.length; i++) {
// // //   console.log(arr[i]);
// // // }
// // console.log(arr[8].name);

// // Hoisting in JS

// // console.log(name);
// const name = "Wasi";

// {
//   var myname = "Hareesh";
// }
// console.log(myname);

// Function in JS

function Sum(a, b) { // Normal FUnction
  return a + b;
}

console.log(Sum(2, 5));

const Subtract = (a, b) => { //  Arrow Function
  return a - b;
};
