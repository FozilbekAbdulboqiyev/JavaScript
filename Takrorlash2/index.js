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

