let obj = {
    name: "Eshmat",
    age: 45,
    _pass1: 777,
    child: {
      name: "Toshmat",
      age: 20,
      _pass2: 111,
    },
  };
  
  function getKey(prop) {
    for (let key in prop) {
      if (typeof prop[key] === "object") {
        return getKey(prop[key]);
      } else {
        console.log(key);
      }
    }
  }
  
  getKey(obj);
  