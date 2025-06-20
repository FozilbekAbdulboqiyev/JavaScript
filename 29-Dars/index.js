let arr=["Ali",["Eshmat","Gulmat",["Toshmat","Bahridin","Muxriddin"]]]

Array.prototype.salom = function() {
    console.log(this.flat(Infinity));
}
arr.salom(); 
