let obj = {
    name:"Algaritm", 
    Age:20,
    child:{
        name:"Oxford",
        Age:10
    },
}
// let newObj=Object.defineProperties({},Object.getOwnPropertyDescriptors(obj))
// // console.log(obj);
//  Object.defineProperty(newObj.child,"name", {
//  writable:false,
//  configurable:false,

// }
// )
// newObj.child.name = "Vali"
// console.log(newObj);

let newonj=Object.defineProperties({},Object.getOwnPropertyDescriptors(obj))

