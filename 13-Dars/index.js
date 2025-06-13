// 1. 
let n = 25;
let binary = n.toString(2); 

let ones = binary.split("1").length - 1;
let zeros = binary.split("0").length - 1;

console.log("Binary:", binary);
console.log("1 lar soni:", ones);
console.log("0 lar soni:", zeros);

// 2. 
let numbers = [7, 2, 15, 4];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log("Eng katta:", max);
console.log("Eng kichik:", min);
console.log("Ayirma:", max - min);

// 3. 
let num = -4.7;

console.log("Math.trunc:", Math.trunc(num));  
console.log("Math.floor:", Math.floor(num));  
console.log("Math.ceil:", Math.ceil(num));    
console.log("parseInt:", parseInt(num));      

// 4. 
let random = Math.floor(Math.random() * 100) + 1;
console.log("Tasodifiy son (1-100):", random);
