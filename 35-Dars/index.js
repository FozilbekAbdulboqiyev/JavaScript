// function* getData(val){
//    while(1){
//     yield val++
//    }
// }
// let obj = getData(1)

// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);

function* getData(val){
    while(1){
      yield val++
    }
  }

  let obj = getData(1);

  let arr = [
    { id: obj.next().value, name: "Eshmat" },
    { id: obj.next().value, name: "Toshmat" },
    { id: obj.next().value, name: "Gulmat" },
    { id: obj.next().value, name: "Ummat" },
    { id: obj.next().value, name: "Urmat" },
  ];

  let list = document.getElementById("list");

  function setUser(){
    list.innerHTML = null;
    arr.map((obj) => {
      let h1 = document.createElement("h1");
      h1.innerHTML = `${obj.id} - ${obj.name} <button onclick="del(${obj.id})">Delete</button>`;
      list.append(h1);
    });
  }

  setUser();

  function addUser(){
    let input = document.getElementById("nameInput");
    let name = input.value

    if(name){
      arr.push({ id: obj.next().value, name: name });
      setUser();
      input.value = ""; 
    } 
  }

  let del = (id) => {
    arr = arr.filter((obj) => obj.id !== id);
    setUser();
  };
