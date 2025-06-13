// for (let i = 0; i < 5; i++){
//     console.log(i)
// }
// // 0,1,2,3,4

// for (let i = 0; i < 5; ++i){
//     console.log(i)
// }
// // 0,1,2,3,4,0,1,2,3,4


let n = 29; 
for (let i = 2; i <= n; i++) {
    let m = true;
    for (let a = 2; a < i; a++) {
        if (i % a === 0) {
            m = false; 
        }
    }
    if (m) {
        console.log(i);
    }
}

// 2 3 5 7 11 13 17 19 23 29