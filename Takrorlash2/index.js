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
let sonlar=[-1,0,3,9]
let musbat=sonlar.find(son => son > 0);
console.log(musbat);

