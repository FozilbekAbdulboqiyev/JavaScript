let data = [
    { id: 1, firstName: "Eshmat", lastName: "Toshmatov", age: 20, status: "Talaba" },
    { id: 2, firstName: "Gulmat", lastName: "Surmatov", age: 17, status: "O'quvchi" },
    { id: 3, firstName: "Dilshod", lastName: "Karimov", age: 25, status: "Ishchi" },
    { id: 4, firstName: "Malika", lastName: "Xoliqova", age: 30, status: "Uqituvchi" },
    { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
    { id: 6, firstName: "Umida", lastName: "Raxmatova", age: 22, status: "Tadbirkor" },
    { id: 7, firstName: "Rustam", lastName: "Ziyodov", age: 35, status: "Dasturchi" },
    { id: 8, firstName: "Nodira", lastName: "Saidova", age: 28, status: "Muhandis" },
    { id: 9, firstName: "Javlon", lastName: "Qurbonov", age: 24, status: "Frilanser" },
    { id: 10, firstName: "Shahnoza", lastName: "Ergasheva", age: 18, status: "O'quvchi" }
  ];
// 1
// data = data.map(data=>
//     data.id === 5 ? 
// {id: 5, firstName: "Ali", lastName: "Valiyev", age: 25, status: "Dasturchi"} :data
// );
// console.log(data);

//   ==================================================================================================================================================================
// 2
function read(valeu, arr) {
    data = data.filter((obj)=>{

        if (obj.lastName.endsWith(valeu)) return obj;
    });
    
}
read("va", data)
console.log(data);


// console.log(data);?????????????????????????????????


//   ==================================================================================================================================================================
// 3
//  let del = (id) => {
//     data=data.filter((obj)=>{
//         if (obj.id !== 4 && obj.id!== 9) return obj
//     })
//  }
// del(4,9)
// console.log(data);

//   ==================================================================================================================================================================
//4
// data =data.map(data=>
//   data.id === 7?
// {...data,firstName:"Gulbashsakar"}:data
// );
// console.log(data);
//   ==================================================================================================================================================================
//5
// data=data.sort((a,b)=>a.lastName.localeCompare(b.lastName))
// console.log(data);
