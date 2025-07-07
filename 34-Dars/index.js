// try{
//   let obj =undefined
//   obj.someMethod();
// } catch (error){
//      console.log(error.name)
//      console.log(error.message)
//      console.log(error.stack)
// }
function getFullName(prop){
  prop();
}
let callFunc =() =>{
  console.log("Eshmat","Toshmatov");
  
}
getFullName(callFunc)