// // While Confirm
// while (confirm("Press OK to continue or Cancel to stop")) {
// }
//
// // Array Fill
// const array = [];
// let userInput;
// while ((userInput = prompt("Enter an element"))) {
//     array.push(userInput);
// }
// console.log(array);
//
// // Array Fill NoPush
// const arrayNoPush = [];
// let index = 0;
// let userInput;
// while ((userInput = prompt("Enter an element"))) {
//     arrayNoPush[index++] = userInput;
// }
// console.log(arrayNoPush);
//
// // Infinite Probability
// let iterations = 0;
// while (true) {
//     iterations++;
//     if (Math.random() > 0.9) {
//         break;
//     }
// }
// alert(`Iterations: ${iterations}`);
//
// // Empty Loop
// while (prompt("Press OK to continue")) {
// }
//
// // Progression Sum
// let sum = 0;
// for (let i = 1; i <= N; i += 3) {
//     sum += i;
// }
// console.log(sum);
//
// // Chess One Line
// const length = 10;
// let line = "";
// for (let i = 0; i < length; i++) {
//     line += i % 2 === 0 ? "#" : ".";
// }
// console.log(line);
//
// // Numbers
// let numbersStr = "";
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         numbersStr += j;
//     }
//     numbersStr += "\n";
// }
// console.log(numbersStr);
//
// // Chess
// const size = 10;
// let chessboard = "";
// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//         if ((i + j) % 2 === 0) {
//             chessboard += ".";
//         } else {
//             chessboard += "#";
//         }
//     }
//     chessboard += "\n";
// }
// console.log(chessboard);
//
// // Cubes
// const N = +prompt("Enter the number of elements");
// const cubesArray = [];
// for (let i = 0; i < N; i++) {
//     cubesArray.push(i ** 3);
// }
// console.log(cubesArray);
//
// // Multiply Table
// const multiplyTable = [];
// for (let i = 1; i <= 10; i++) {
//     multiplyTable[i] = [];
//     for (let j = 1; j <= 10; j++) {
//         multiplyTable[i][j] = i * j;
//     }
// }
// console.log(multiplyTable);
//
// // Read Array of Objects
// function readArrayOfObjects() {
//     const arrayOfObjects = [];
//     while (true) {
//         const obj = {};
//         let key;
//         while ((key = prompt("Enter a key")) !== null) {
//             const value = prompt("Enter a value");
//             obj[key] = value;
//         }
//         arrayOfObjects.push(obj);
//         if (!confirm("Continue adding objects?")) {
//             break;
//         }
//     }
//     return arrayOfObjects;
// }
// console.log(readArrayOfObjects());
//
// // Rhombus
// const size = 5;
// let rhombus = "";
// for (let i = 1; i <= size * 2 - 1; i++) {
//     const spaces = Math.abs(size - i);
//     const hashes = size * 2 - 1 - 2 * spaces;
//     rhombus += " ".repeat(spaces) + "#".repeat(hashes) + "\n";
// }
// console.log(rhombus);
//
// // DOM: Multiply Table
// const table = document.createElement("table");
// for (let i = 1; i <= 10; i++) {
//     const row = document.createElement("tr");
//     for (let j = 1; j <= 10; j++) {
//         const cell = document.createElement("td");
//         cell.innerText = i * j;
//         row.appendChild(cell);
//     }
//     table.appendChild(row);
// }
// document.body.appendChild(table);
//
// // DOM: Highlight Cell
// const cells = document.querySelectorAll("td");
// cells.forEach(cell => {
//     cell.addEventListener("mouseover", () => {
//         cell.style.backgroundColor = "yellow";
//     });
//     cell.addEventListener("mouseout", () => {
//         cell.style.backgroundColor = "";
//     });
// });
//
// // DOM: Highlight Cross
// const cells = document.querySelectorAll("td");
// cells.forEach((cell, index) => {
//     cell.addEventListener("mouseover", () => {
//         const row = Math.floor(index / 10);
//         const column = index % 10;
//         for (let i = 0; i < 10; i++) {
//             document.querySelector(`tr:nth-child(${row + 1})`).querySelectorAll("td")[i].style.backgroundColor = "lightgray";
//             document.querySelector(`tr:nth-child(${i + 1})`).querySelectorAll("td")[column].style.backgroundColor = "lightgray";
//         }
//     });
//     cell.addEventListener("mouseout", () => {
//         cells.forEach(cell => {
//             cell.style.backgroundColor = "";
//         });
//     });
// });
