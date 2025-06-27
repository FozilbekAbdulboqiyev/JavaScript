class Parent {
    constructor(props){
     console.log(props);
     
    }
    getName(props){
        console.log(this.name, "va", props );
        
    }
}
let user=new Parent("Eshmat");
// console.log(user.name);
user.getName("Toshmat")