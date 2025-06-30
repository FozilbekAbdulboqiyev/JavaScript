
class Child {
    getFname() {
        console.log("BU birinchi child");
    }
  }
  
  class SubChild {
    getLname() {
        console.log("BU ikkinchi child");
        
    }
  }
  
  class Parent {
    constructor() {
      this.child = new Child();
      this.subChild = new SubChild();
    }
    showAll() {
        console.log(this.child.getFname());
        console.log(this.subChild.getLname());
      }
    
    }
    
    const parentObj = new Parent();
    parentObj.showAll();
    