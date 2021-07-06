console.log("Hello World")
const a = "const" /* Bien KHONG the thay doi */
let b = "let" /* Bien CO the thay doi - *scope */
var c = "var" /* Bien CO the thay doi */

let undefinedTest;
let nullTest = null;

const name = "Chi"
const number = "1"
const chi = {
    firstName: "Nguyen",
    lastName: "Chi",
    age: 18,
    male: true,
}
// Data Types
// String : text
// Number 
// Object : luu tru nhung du lieu khac nhau
// Boolean : True or False
// Null, Undefined  assign: gan gia tri
// Condition
// if else

/* if (chi.age == 18) {
   console.log("Chi 18 tuoi")

} else if (chi.age == 23) {
   console.log("Chi 23 tuoi")

}
else {
   console.log("Bi mat nhe!")
}  */

// switch case
switch (chi.age) {
    case 18:
    case 23:
        console.log("Chi 23 tuoi")
        break; //tách case phải dùng break
    default:
        console.log("Khong biet")
        break;
}


