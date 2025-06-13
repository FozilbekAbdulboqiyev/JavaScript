// let user = {
//   id: 1,
//   firstname: "Eshmat",
//   surName: "Toshmatov",
//   age: 30,
//   getFullname: () => {
//     return `${this.firstname} ${this.surName}`;
//   },
// };
// console.log(user.getFullname());

// Undefined  Undefined chunki   Bu yerda  getFullname metodini arrow function (=>) yordamida yozilgan. Ammo arrow functionlarda this o'zining kontekstiga ega emas



let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();


//  1 , 0 chiqadi chunki   Koddagi har bir metod thisni qaytaradi, shuning uchun bir-biriga ulanib ishlayapti.

