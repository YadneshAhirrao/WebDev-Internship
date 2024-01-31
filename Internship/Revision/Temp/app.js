// let arr = [10 , 20, 30, 40, 50, 60, 7];

// // let result = arr.every((el) => (el%10 == 0));

// let result = arr.reduce((acc, el) => {
//     if (el < acc ) {
//         return el;
//     } else {
//         return acc;
//     }
// });

// console.log(result);

// let h3 = document.createElement("h3");
// h3.innerText = "I'm a Blue Function";

// document.querySelector(".rao").append(h3);

// h3.style.color = "blue";

// let newDiv = document.createElement("div");
// let heading = document.createElement("h1");
// let para = document.createElement("p");

// heading.innerText = "I'm in div ";
// para.innerText = "Me Too! ";

// newDiv.appendChild(heading);
// newDiv.appendChild(para);

// document.querySelector(".rao").append(newDiv);

// newDiv.style.backgroundColor = "pinkw";
// newDiv.style.border = "1px solid black";

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success: Data was saved successfully");
//     } else {
//       reject("Failure: Weak Connections");
//     }
//   });
// }


// savetoDb("Hello Yadnesh")
// .then((result) => {
//     console.log(result);
//     console.log("Data 1: Saved Successfully");
//     return savetoDb("Hello Rao");
// })
// .then((result) => {
//     console.log(result);
//     console.log("Data 2: Saved Sucessfully");
//     return savetoDb("Hello Shri");
// })
// .then((result) => {
//     console.log(result);
//     console.log("Data 3: Saved Sucessfully");
// })
// .catch((err) => {
//     console.log(err);
//     console.log("Promise rejected");
// });

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) =>  {
//         setTimeout(()=> {
//             h1.style.color = color;
//             resolve("Colour Changed");
//         }, delay);
//     })
// }


// changeColor("green" , 1000)
// .then(()=> {
//     console.log("green color changed");
//     return changeColor("red" , 1000)
// })
// .then(()=>  {
//     console.log("red color changed");
//     return changeColor("yellow" , 1000);
// })
// .then(()=> {
//     console.log("yellow color changed");
//     return changeColor("maroon" , 1000);
// })
// .then(() => {
//     console.log("maroon color changed");
// })



