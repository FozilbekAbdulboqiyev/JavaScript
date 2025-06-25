//foreach--- bu array ichidagi harbir element ustida amal bajaradi
// let sonlar =[1,2,3,4,5];
// sonlar.forEach(function(son){
//     console.log(son);
    
// })

// let mevalar=["olma","olma","banan"]
// mevalar.forEach(function(meva,index){
//     console.log(index + ':'+meva);
    
// })
//map ham foreachga oxshaydi
// let sonlar=[1,2,3,4,5];
// let newNumber =sonlar.map(function(son){
//     return son*2
// })
// console.log(newNumber);
//filter bu sharga mos keladigan elemntlarni  yangi arry ga qaytaradi
// let sonlar=[-5,-4,-3,-2,-1,0,1,2,3,4,5]
// let musbat=sonlar.filter(function(son){
//     return son > 0;
// });
// console.log(musbat);
//find bu shartga ,mos kelganlarni birinchisini qaytaradi
// let sonlar=[-1,0,3,9]
// let musbat=sonlar.find(son => son > 0);
// console.log(musbat);
//findindex bu shartga mos keladigan birinchi leemntni indexsini qaytaradi;
// let sonlar=[-1,0,3,9]
// let musbat=sonlar.findIndex(son => son < 0);
// console.log(musbat);
//Findlastindex bu shartga moskelgan elemntni oxirgi indexsini chiqaradi
// let sonlar=[-1,0,3,9]
// let musbat=sonlar.findLastIndex(son => son < 2);
// console.log(musbat);
//sort bu arraydigi elenmentlarni saralab tartiblaydi
// let mevalar=["olma","ananas","banan"]
// mevalar.sort()
// console.log(mevalar);
//every bu arry ichidagi hamma elementni tekshiradi agar hammasi shartga too'g'ri kelsa true qaytaradi
// let sonlar=[3,9]
// let musbat=sonlar.every(son => son > 0);
// console.log(musbat); 
//some bu shartdagi 1ta elemnt  to'g'ri keladin bo'lsa ham true qaytaradi
// let sonlar=[-3,-1,0,9]
// let musbat=sonlar.some(son => son >0);
// console.log(musbat);
//flat bu ichi ma ich ketgan arraylarni bitta arrayga tekislaydi
//  let arr =[1,2,3,[5,4]];
//  let newArr=arr.flat();
//  console.log(newArr);
//fill bu arr dagi barcha qiymatlarni boshqa bir qiymatlarbilan berilgan qiymatda to'ldirish;
//  let arr =[1,2,3,4,5];
//  arr.fill(6)
//  console.log(arr);
//arr ichidagi qismini olib shu arrni boshqa joyiga nusxalaydi
// let arr =[1,2,3,4,5,6]
// arr.copyWithin(0,3,5)
// console.log(arr);
// let arr =[1,2,3,4,5];
// arr.fill(7)
// console.log(arr);

// let sonlar=[-5,-4,-3,-2,-1,0,1,2,3,4,5]
// let manfiy=sonlar.filter(function(son){
//     return son < 0;
// });
// console.log(manfiy);

// let arr=["Ali","Eshmat","Gulmat","Toshmat","Bahridin","Muxriddin"]
// arr.forEach(function(ism,index){
//     console.log(index + ':'+ism);
    
// })

//crud
//creat arr ga yangi malumot qo'shish
// let user=[
//     {id:1, name:"Ali",age:25,},
//     {id:2, name:"Gulamt",age:35,}
// ]
// let newuser={id:3, name:"Eshmat",age:17,};
// user.push(newuser);
// console.log(user);
//Read foydalanuchini ko'rish yoki saralash
// let user=[
//     {id:1, name:"Ali",age:25,},
//     {id:2, name:"Gulamt",age:35,},
//     {id:2, name:"Gulamt",age:17,},
//     {id:2, name:"Gulamt",age:60,},
//     {id:2, name:"Gulamt",age:45,}
// ]
// let newArr =user.filter(user => user.age >25);
// console.log(newArr);
//Update foydalanuvchi malumotini o'zgartirish
// let user=[
//     {id:1, name:"Ali",age:25,},
//     {id:2, name:"Gulamat",age:35,},
//     {id:3, name:"Eshmat",age:17,},
//     {id:4, name:"Gulshan",age:60,},
//     {id:5, name:"Gulbashakar",age:45,}
// ]
// user=user.map(user=>
//     user.id ===2?{...user,name:"Aziz"}:user
// )
// console.log(user);
//Delete arrdan foydalanuchi malumotini o'chirish
// let user=[
//     {id:1, name:"Ali",age:25,},
//     {id:2, name:"Gulamat",age:35,},
//     {id:3, name:"Eshmat",age:17,},
//     {id:4, name:"Gulshan",age:60,},
//     {id:5, name:"Gulbashakar",age:45,}
// ]
// user=user.filter(user=>user.id!==1)
// console.log(user);
// //====================================================
// let nestedArr = [[1, 2, [3, 4, [5, 6]]]];

// let NewArr = []
// function GetNesArr(arr) {
//   for (val of arr) {
//     if (val) {
//       NewArr+=[[val]]
//     } else {
//       console.log(`Bu Arr`)
//     }
//   }
// }
// GetNesArr(nestedArr)
// console.log(NewArr);


// // NewArr = 1,2,3,4,5,6 Kelyapti
// // 1-----------------------------------------------------------------------------------------------------------------
// function fib(n){
//     if (n===0)return 0
//     else if(n===1){
//         return 1
//     }
//     else{
//         return fib (n -1)+fib(n-2)
//     }
// }
// console.log(fib(5));
// // 2-------------------------------------------------------------------------------------------------------------------------------
// function sumDigits(n){
//     if(n===0)return 0
//     else{
//         return (n % 10)+sumDigits(Math.floor(n/10 ));
//     }
    

// }
// let user=[
//     {id:1, name:"Ali",age:25,},
//     {id:2, name:"Gulamt",age:35,},
//     {id:2, name:"Gulamt",age:17,},
//     {id:2, name:"Gulamt",age:60,},
//     {id:2, name:"Gulamt",age:45,}
// ]
// let newArr =user.filter(user => user.age >25);
// console.log(newArr);
// let str = "Oxford2025";
// let oxf = "";

// for (let i = 0; i < str.length;) {
//   if (isNaN(str[i])) {
//     oxf += str[i];
//   }
//   i++
// }
// let  date = new Date ()
// let month = [
//     "Yanvar",
//     "Fevral",
//     "Mart",
//     "Aprel",
//     "May",
//     "Iyun"
// ]
// date = month
// console.log(date);
// let str = "Webbrain Academy";
// let sum = 0;

// for (let i = 0; i < str.length; i++) {
  
//   if (
//     (str[i] >= 'A' && str[i] <= 'Z') || 
//     (str[i] >= 'a' && str[i] <= 'z')
//   ) {
//     sum += 1; 
//   }
// }

// console.log("Harflar :", sum);

// let str ='{"name":"Ali","Age":"25"}'
// let obj=JSON.parse(str)
// console.log(obj.name);
// //=========================================
// let user = {name:"Ali", age:25};
// let json =JSON.stringify(user)
// console.log(json);


// console.log("Start");
// setTimeout(() => {
// console.log("setTimeout - 1");
// }, 1000);
// for (let i = 0; i < 10; i++) {
// console.log(i);
// }

// setTimeout(() => {
// console.log("setTimeout - 2"); 
// }, 0);
// console.log("End"); 

let user ={name:"Ali",age:25};
let {name, age}=user
console.log(name);

let numbers = [10, 20, 30];

let [a, b] = numbers;

console.log(a); // 10
console.log(b); // 20
