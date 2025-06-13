    
    //IIFE
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
//             let total = 0;

//        (function calculate(a) {
//            total += a.salary;
//                 a.person.forEach(person => {
//             calculate(person);
//           });
//         })(company);

// console.log(total);
//---------------------------------------------------------------
// //NFE
// let total = 0;

// const calculate = function sumSalaries(obj) {
//   total += obj.salary;
//   obj.person.forEach(child => sumSalaries(child));
// };
// calculate(company);
// console.log(total);
//---------------------------------------------------------------
//setinterval
// let count = 0;
// let intervalId = setInterval(function() {
//     console.log("Takrorlash:", ++count);
//     if (count === 5) {
//         clearInterval(intervalId); // 5 marta bajargach to‘xtaydi
//         console.log("To‘xtatildi");
//     }
// }, 1000);
//---------------------------------------------------------------
// setInterval(function() {
//     let hozirgiVaqt = new Date();
//     console.log(hozirgiVaqt.toLocaleTimeString());
// }, 1000);
//---------------------------------------
// let son = 0;

// setInterval(function() {
//     console.log("Son:", son);
//     son++;
// }, 1000);
//----------------------------------------
//settimeout------------------------------
// setTimeout(function() {
//     console.log("Salom!");
// }, 3000);
//----------------------------------------
// setTimeout(function() {
//     alert("Xush kelibsiz!");
// }, 2000);
// //----------------------------------------



