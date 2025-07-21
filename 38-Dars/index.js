
let count = 0;

let h1 = document.createElement("h1");
h1.innerText = count;
h1.style.fontSize = "48px";
h1.style.textAlign = "center";

let plusBtn = document.createElement("button");
plusBtn.innerText = "+";
plusBtn.style.fontSize = "24px";
plusBtn.style.margin = "10px";
plusBtn.setAttribute("onclick", "increment()");


let minusBtn = document.createElement("button");
minusBtn.innerText = "-";
minusBtn.style.fontSize = "24px";
minusBtn.style.margin = "10px";
minusBtn.setAttribute("onclick", "decrement()");

let clearBtn = document.createElement("button");
clearBtn.innerText = "Clear";
clearBtn.style.fontSize = "24px";
clearBtn.style.margin = "10px";
clearBtn.setAttribute("onclick", "reset()");

function increment() {
  count++;
  h1.innerText = count;
}


function decrement() {
  count--;
  h1.innerText = count;
}
function reset() {
    count = 0;
    h1.innerText = count;
  }
  

document.body.style.textAlign = "center";
document.body.style.paddingTop = "50px";
document.body.appendChild(h1);
document.body.appendChild(plusBtn);
document.body.appendChild(minusBtn);
document.body.appendChild(clearBtn);

