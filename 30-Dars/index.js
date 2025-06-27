// class Parent {
//     constructor(props){
//      console.log(props);
     
//     }
//     getName(props){
//         console.log(this.name, "va", props );
        
//     }
// }
// let user=new Parent("Eshmat");
// // console.log(user.name);
// user.getName("Toshmat")
//class dagi glabal o'zgaruvchi bu klass dan tashqarida elon qilingan o'zgaruvchi .Uni class ichida o'qish va o'zgartirish mumkin
let count =0;
class Parent{
    getData(){
        count += 10;
        console.log(count)
    }
}
let obj = new Parent()
obj.getData()