// let str = "webbbbbbrain";


// let seen = new Set();
// let result = "";

// for (let num of str) {
//   if (num === " " || !seen.has(num)) {
//     result += num;
//     if (num !== " ") seen.add(num);
//   }
// }

// console.log(result);  




// let str="Webbrain Academy";

let str = "Webbrain Academy";
let sum = 0;

for (let i = 0; i < str.length; i++) {
  
  if (
    (str[i] >= 'A' && str[i] <= 'Z') || 
    (str[i] >= 'a' && str[i] <= 'z')
  ) {
    sum += 1; 
  }
}

console.log("Harflar :", sum);