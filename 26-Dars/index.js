// let arr = [7, 1, 6, 3, 9, 20]

// function getDate() {
//     let a =this
//     a.sort((a , b)=>{
//         return a - b
//     })
//     console.log(this); 
//    a.length 
//   console.log(a - this);
// }
// getDate.call(arr)
//========================================================================================================
// let obj = {
//     people: [
//         { name: "Ali", age: 25 },
//         { name: "Vali", age: 30 },
//         { name: "Eshmat", age: 20 }
//     ]
// };

// let total = 0;

// function getDate() {
//     this.people.forEach(person => {
//         total += person.age;
//     });
// }

// getDate.call(obj);
// console.log(total)
//===========================================================================================================
let user = { name: "Gulmat" };

function greet() {
    console.log("Salom, " + this.name);
}

greet.call(user);
//============================================================================================================
 let product = {price: 100};
 function pay(){
    return this.price*1.16

 };
 let finalprise=pay.call(product)
 console.log(finalprise)

let person={
    firstName:"Eshmat",
    lastName:"Gulmatov",
}
function full(){
    console.log(this.firstName+this.lastName);
}
full.call(person)
//Functioncall