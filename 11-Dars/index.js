function Calculator() {
    this.read = function() {
      this.a = +prompt("birinchi sonni kiriting:", 0);
      this.b = +prompt("ikkinchi sonni  kiriting:", 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  alert("Sum = " + calculator.sum());
  alert("Ko'paytma = " + calculator.mul());

//  2-qism

// 1 -topshiriq


// let obj={
//     id:1,
//     name:"WebBrain"
// }

// for(key in obj);
// console.log(obj[key]);

// // 2- topshiriq

// let obj2 = {
//     id: 2,
//     name: "WebBrain"
// };

// for ( key in obj2) {
//   if (typeof obj2[key] === "number") {
//     console.log( obj2[key]);
//   }
// }


// // 3 - topshiriq

// let obj3={
//     id:3,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// for (key in obj3) {
//   if (typeof obj3[key] === "boolean") {
//     console.log(key + "-" + obj3[key]);
//   }
// }


// // 4-topshiriq

// let obj4={
//     id:4,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }

// for (key in obj4) {
//     if(typeof obj4[key] === "string"){
//         console.log(key+ ":" + obj4[key] );
//     }
// }

// // 5 - topshiriq

// let obj5={
//   id:5,
//   name:"atirgul",
//   color:"qizil",
//   count:10,
//   price:"100000$"
// }

// for(key in obj5){
//     if(typeof obj5[key] === "string"){
//         console.log(obj5[key]);
//     }
// }

// // 6 - toprshiriq


// let person = {
//     id: 6,
//     name: 'Odil',
//     age: 78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age: 48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age: 20
//         }
//     }
// };

// function ALLAges(person) {
//     let first = person.age || 0;
//     if (person.child) {
//         first += ALLAges(person.child);
//     }
//     return first;
// }

// console.log(ALLAges(person));


// // 7-topshiriq


// let obj7={
// id:1,name:'Usmon',job:'developer'
// }

// let newobj = structuredClone(obj)
// let newobj2 = structuredClone(obj)
// newobj.name = 'eshmat';
// newobj2.name = 'toshmat'

// console.log(newobj);
// console.log(newobj2);
// console.log(obj7);


// // 8 - topshiriq


// // let year = +prompt("Tug'ilgan yilingizni kiriting:");
// // let age = +prompt("Yoshingizni kiriting:");

// // let obj8 = {
// //     id: 8,
// //     name: 'Usmon',
// //     year: year,
// //     age: age
// // };

// // if (2025 - obj8.year === obj8.age) {
// //     console.log(`to'g'ri ma'lumot`);
// // } else {
// //     console.log(`xato ma'lumot`);
// // }


// // 9 - topshiriq

// obj={
//   id:9,
//   title:'best',
//   address:{street:"Farobiy",number:'34'}
// }

// for(key in obj){
//     if(typeof obj[key] === "obyect"){
//         console.log(` Yes`);
//     } else console.log(` Now`);
    
// }
