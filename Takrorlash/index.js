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