// let n = 5;
// let i = 0;
// let sum = 0;

// let numbers = [10, 20, 30, 40, 50];    

// while(i < n){
//     sum += numbers[i];
//     i++;
// }
// let orta = sum / n;
// console.log(orta);
// 30

// 2-qism

let m = 5; 
let a = 0;
let ildiz = 1;

let numbers = [2, 4, 8, 16, 32];

do {
    ildiz *= numbers[a];
    a++;
} while (a < m);

let result = Math.pow(ildiz, 1/m);
console.log( result);

// 8.00000000002
