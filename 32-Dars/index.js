
// class Child {
//     getFname() {
//         console.log("BU birinchi child");
//     }
//   }
  
//   class SubChild {
//     getLname() {
//         console.log("BU ikkinchi child");
        
//     }
//   }
  
//   class Parent {
//     constructor() {
//       this.child = new Child();
//       this.subChild = new SubChild();
//     }
//     showAll() {
//         console.log(this.child.getFname());
//         console.log(this.subChild.getLname());
//       }
    
//     }
    
//     const parentObj = new Parent();
//     parentObj.showAll();
    
class Child {}

const Child1 = (PropClass) => class extends PropClass {
  name1 = "Gulmat";

  printName1() {
    console.log("Child1 ichida:",this.name1, this.fullname); 
  }
};

const Child2 = (PropClass) => class extends PropClass {
  name2 = "Toshmat";

  printName2() {
    console.log("Child2 ichida:",this.name2, this.fullname); // fullname dan foydalanish
  }
};

class Parent extends Child1(Child2(Child)) {
  constructor(fullname) {
    super();
    this.fullname = fullname;
  }
}

const obj = new Parent("Eshmatov");

obj.printName1(); 
obj.printName2(); 

console.log(obj);
