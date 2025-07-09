function* getData(val){
   while(1){
    yield val++
   }
}
let obj = getData(1)

console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
