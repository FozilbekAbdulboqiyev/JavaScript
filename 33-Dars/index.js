class Clock {
    showTime() {
      setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        console.log(`${hours}:${minutes}:${seconds}`);
      }, 1000);
    }
  }
  
  const clock = new Clock();
  clock.showTime();

  class Car {
  constructor(nomi) {
    this.nomi = nomi;
    this.tezlik = 0;
  }

  gazBos() {
    this.tezlik += 10;
  }

  holat() {
    console.log(`${this.nomi} hozir ${this.tezlik} km/h tezlikda`);
  }
}

// Misol uchun:
const mashina = new Car("Malibu");
mashina.holat();   
mashina.gazBos();
mashina.holat();   
mashina.gazBos();
mashina.holat();   
