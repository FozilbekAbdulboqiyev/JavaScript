obj={
    id:9,
    title:'best',
    address:{street:"Farobiy",number:'34'}
  }
  
  for(key in obj){
      if(typeof obj[key] === "obyect"){
          console.log(` Yes`);
      } else console.log(` Now`);
      
  }
  