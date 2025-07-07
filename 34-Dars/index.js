// try{
//   let obj =undefined
//   obj.someMethod();
// } catch (error){
//      console.log(error.name)
//      console.log(error.message)
//      console.log(error.stack)
// }
// function getFullName(prop){
//   prop();
// }
// let callFunc =() =>{
//   console.log("Eshmat","Toshmatov");
  
// }
// getFullName(callFunc)
setTimeout(()=>{
  console.log("1-Bosqich");
  setTimeout(() =>{
    console.log("2-Bosqich");
    setTimeout(()=>{
      console.log("3-Bosqich");
      
    },3000)
  },2000)
},1000)