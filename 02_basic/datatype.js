"use strict"; // treat all JS code as newer version

// alert("hello") //useto show popups
// let age = 7
// if (age < 18) {
//     throw new Error("sanket")
// } else {
//     console.log("success");
// }k

let isstring  = "333aa"
let convertToNumber = Number(isstring)

console.log(typeof(convertToNumber))
console.log(convertToNumber)


let dataType = null
let convertToDatatype = Number(dataType)
console.log(typeof(convertToDatatype))
console.log(convertToDatatype)


const id = Symbol('123')
const new1 = Symbol('123')

console.log(id == new1)



// const id = 6;

if (true) {
    let x = 10;
    console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined


