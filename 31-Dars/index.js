// class MyClass {
//     static myStaticVar = 'Bu static o‘zgaruvchi';
  
//     static myStaticMethod() {
//       console.log('Static method chaqirildi');
//     }
  
//     instanceMethod() {
//       console.log('Bu oddiy instance method');
//     }
//   }
class Calculator {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  }
  console.log(Calculator.add(5, 3));      // 8
console.log(Calculator.subtract(10, 4)); // 6
