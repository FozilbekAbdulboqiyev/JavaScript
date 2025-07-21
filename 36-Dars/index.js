// let arr = [
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
//     {name:"Eshmat",age:20},
// ]
// let data = {
//     name:"Toshmat",
// }
// export default function getData(){
//     console.log("Hiiii");
// }
// export{arr,data}


let webbrain = {
    frontend: [
        { course: "react", price: 120 },
        { course: "vue", price: 110 },
        { course: "angular", price: 100 },
    ],
    backend: [
        { course: "java", price: 120 },
        { course: "php", price: 110 },
        { course: "nodejs", price: 100 },
    ],
    mobile: {
        android: [
            { course: "android", price: 120 },
            { course: "flutter", price: 110 },
        ],
        ios: [
            { course: "ios", price: 120 },
            { course: "flutter", price: 110 },
        ],
    },
};



let getFunk = (curry) => {
    return (one) => {
        if (one) {
            return getFunk(curry + one)
        }
        return curry
    }
}
console.log(getFunk(1)(2)(4)(5)(6)());