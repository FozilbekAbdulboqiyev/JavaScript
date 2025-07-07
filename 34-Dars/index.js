try{
  let obj =undefined
  obj.someMethod();
} catch (error){
     console.log(error.name)
     console.log(error.message)
     console.log(error.stack)
}
