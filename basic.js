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
showObjectInfo({ obj, undefinedTest, nullTest })

//Array
const arr = ["Chi", 2, 9, "Misery", 1997];
arr.push("$")

/* showObjectInfo(arr[0])
showObjectInfo(arr[4]) */
// showObjectInfo(arr.indexOf("1")) // -1 : dữ liệu nằm ngoài array */ 

//Loop (for, whille, do while)
/* for (let index = 0;index<5;index+=3) {
    showObjectInfo(arr[index])
} */
// let index = 0
// while check condition before DO
/* while(index<5){
    showObjectInfo(arr[index]);
    index++ //bat buoc phai tang index
} */
/* 
do {
    showObjectInfo(arr[index]);
    index++

} while ( index<3 )
 */

let num1 = 5 //->6
let num2 = 6 //->5

let temp = num1 // temp =5 /* thong dung */
num1 = num2 //num1=6, num2=6
num2 = temp // num2=5

num1 = num1 + num2    /* de co loi */
num2 = num1 - num2 //11-6 =5
num1 = num1 - num2 //11-5 =6

num1^=num2^=num1^=num2 /* chi co 2 bien */
/* 
1001 num1
1010 num2
num1 = 0011
num2 = 1001
num1 = 1010
*/

// index++ va ++index
let index =5
let test1 = ++index
showObjectInfo(test1)
