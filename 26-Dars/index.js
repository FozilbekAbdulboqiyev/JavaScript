// let arr = [7, 1, 6, 3, 9, 20]

// function getDate() {
//     let a =this
//     a.sort((a , b)=>{
//         return a - b
//     })
//     console.log(this); 
//    a.length 
//   console.log(a - this);
// }
// getDate.call(arr)
//========================================================================================================
let obj = {
    name:"Eshmat",
    Age:20,
    status:"Talaba",
    
}

let total = 0

function twise(){
    let a= this
    total+=obj?.Age
    console.log(this);
    a.person.forEach(person => {
    calculate(person);
      });
}
twise.call(obj)
console.log(total);