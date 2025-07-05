let num = 5
if (num%2){
    console.log('toq')
    console.log( 5 + 2)
}
else{
    console.log('juft')
    console.log( 5 + 3);
}   
let nestedArr = [1, 2, [3, 4, [5, 6, [7, [8, [9, [10, [11, [12, [13]]]]]]]]]];

let newArr = [];
function recFunction(arr) {
  if (arr.length) {
    for (let value of arr) {
      if (Array.isArray(value)) return recFunction(value);
      else {
        newArr.push(value);
      }
    }
  }
}
recFunction(nestedArr);
console.log(newArr);
//foreach--- bu array ichidagi harbir element ustida amal bajaradi
// let sonlar =[1,2,3,4,5];
// sonlar.forEach(function(son){
//     console.log(son);
    
// })

// let mevalar=["olma","olma","banan"]
// mevalar.forEach(function(meva,index){
//     console.log(index + ':'+meva);

// let sonlar=[1,2,3,4,5];
// let newNumber =sonlar.map(function(son){
//     return son*2
// })
// console.log(newNumber);