console.log("Hello World")
const a = "const" /* Bien KHONG the thay doi */
let b = "let" /* Bien CO the thay doi - *scope */
var c = "var" /* Bien CO the thay doi */

let undefinedTest;
let nullTest = null;

const name = "Chi"
const number = "1"
const obj = {
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
/* switch (chi.age) {
    case 18:
    case 23:
        console.log("Chi 23 tuoi")
        break; //tách case phải dùng break
    default:
        console.log("Khong biet")
        break;
} */

//Function
function showObjectInfo(renderringObj) {
    console.log(renderringObj)
}
showObjectInfo({obj,undefinedTest, nullTest})

//Array
const arr = ["Chi",2,9,"Misery"];
arr.push("$")
/* showObjectInfo(arr[0])
showObjectInfo(arr[4]) */
showObjectInfo(arr.indexOf("1")) // -1 : dữ liệu nằm ngoài array



