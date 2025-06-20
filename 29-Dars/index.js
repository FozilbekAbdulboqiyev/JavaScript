// let arr=["Ali",["Eshmat","Gulmat",["Toshmat","Bahridin","Muxriddin"]]]

// Array.prototype.salom = function() {
//     console.log(this.flat(Infinity));
// }
// arr.salom(); 

let arr=[1,2,3,4,5]
 Array.prototype.hi=function(val){
 let newArr=this.filter((valeu)=> valeu !== val);
 console.log(newArr);
 }
 arr.hi(3)
 console.log(arr);
 