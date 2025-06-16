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
// let user = { name: "Gulmat" };

// function greet() {
//     console.log("Salom, " + this.name);
// }

// greet.call(user);
// //============================================================================================================
//  let product = {price: 100};
//  function pay(){
//     return this.price*1.16

//  };
//  let finalprise=pay.call(product)
//  console.log(finalprise)

// let person={
//     firstName:"Eshmat",
//     lastName:"Gulmatov",
// }
// function full(){
//     console.log(this.firstName+this.lastName);
// }
// full.call(person)
//Functioncall
// function yigim(){
//     return this.prices.reduce((sum,price)=>sum+price,0)
// }
// let store ={
//     prices:[100,200,300]
// };
// let total =yigim.apply(store)
// console.log(total);
// //============================================================================================
// function kvadrat() {
//     console.log(this.num * 2);
// }

// let obj = { num: 7 };
// kvadrat.apply(obj);
// //============================================================================================
// function Symvols(symvol) {
//     console.log(symvol + this.text + symvol);
// }

// let obj = { text: "JavaScript" };
// Symvol.apply(obj, ["  3oy  "]); 
//====================================================================================
// function showAge() {
//     console.log("Yosh: " + this.age);
// }

// let user = { age: 19 };
// showAge.apply(user); 
//====================================================================================
// Function band
function kub() {
    console.log(this.num * 3);
}

let obj = { num: 6 };
kub.bind(obj)()
// ====================================================================================
