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

  let str3 = `WebBrain`
console.log(str3.slice(0, 5)); 

let str4 = `$1200`
console.log(str4.slice(1,4)); 

let str6 = `oxfordit`
let a = `${str6.charAt(0)}`
let b =`${a.toUpperCase(a)}`
let n =`${str6.charAt(0)=b}`
console.log(str6);


let str =`oxfordit` 
str.includes()===`oxfordit`?console.log(true):console.log(folse);
let str = "Oxford2025";
let oxf = "";

for (let i = 0; i < str.length;) {
  if (isNaN(str[i])) {
    oxf += str[i];
  }
  i++
}
