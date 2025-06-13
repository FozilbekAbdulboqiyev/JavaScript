//1-----------------------------------------------------------------------------------------------------------------
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
//2-------------------------------------------------------------------------------------------------------------------------------
// function sumDigits(n){
//     if(n===0)return 0
//     else{
//         return (n % 10)+sumDigits(Math.floor(n/10 ));
//     }
    

// }
// console.log(sumDigits(1234));
//---------------------------------------------------------------------------------------------------------
// 5------------------------------------------------------------------------------------------------------------
const company = {
id: 1,
      name: "CEO",
      salary: 5000,
      person: [
        {
          id: 2,
          name: "CTO",
          salary: 4000,
          person: [
            { id: 4, name: "Dev1", salary: 2000, person: [] },
            { id: 5, name: "Dev2", salary: 2500, person: [] }
          ]
        },
        {
          id: 3,
          name: "CFO",
          salary: 4500,
          person: [
            { id: 6, name: "Accountant", salary: 1800, person: [] }
          ]
        }
      ]
    };
    let total = 0
    function totalsumm(obj) {
       total+=obj?.salary;
       for(let valeu of obj?.person)
        totalsumm(valeu)
        
    }
    totalsumm(company);
    console.log(total);
    