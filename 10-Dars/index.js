let user = {
    id: 1,
    name: "Eshmat",
    age: 65,
    status: "Nafaqa oluvchi",
    child: {
        id: 2,
        name: "Toshmat",
        age: 30,
        status: "Talaba",
    },
};
let cloneUser = structuredClone(user);

cloneUser.child.age = 45;

console.log("O'zgarmasyosh:", user.child.age);        
console.log("O'zgarganyosh:", cloneUser.child.age); 

// let user =  {
//     id : 1,
//     name: "Eshmat",
//     age: 65,
//     status: "Nafaqa oluvchi",
//     child:{
//         id: 2,
//         name: "Toshmat",
//         age:30,
//         status: "Talaba",
//         action() {
//             return this.age
//         }
//     } 
// }


// let cloneUser = Object.assign(user);
// cloneUser.child.action = 45;


// console.log(cloneUser);
