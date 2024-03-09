// // Task: Confirms
// const answers = [
//     confirm("Do you like JavaScript?"),
//     confirm("Do you enjoy coding?"),
//     confirm("Is this tutorial helpful?")
// ];
// console.log(answers);
//
// // Task: Prompts
// let questions = [];
// questions[0] = prompt("What is your name?");
// questions[1] = prompt("How old are you?");
// questions[2] = prompt("Where are you from?");
// console.log(questions);
//
// // Task: Item access
// const array = ["apple", "banana", "cherry", "date"];
// let index = prompt("Enter an index:");
// if (index === "length") {
//     alert(array.length);
// } else {
//     index = parseInt(index);
//     alert(array[index]);
// }
//
// // Task: Item change
// let index = prompt("Enter an index:");
// let value = prompt("Enter a value:");
// index = parseInt(index);
// const array = [];
// array[index] = value;
// console.log(array);
//
// // Task: Multiply table
// const multiplyTable = [];
// for (let i = 0; i < 5; i++) {
//     multiplyTable[i] = [];
//     for (let j = 0; j < 5; j++) {
//         multiplyTable[i][j] = i * j;
//     }
// }
// console.log(multiplyTable);
//
// // Task: Multiply table slice
// const multiplyTableSlice = multiplyTable.map(row => row.slice(1));
// console.log(multiplyTableSlice);
//
// // Task: IndexOf Word
// const sentence = prompt("Enter a sentence:");
// const word = prompt("Enter a word:");
// const words = sentence.split(" ");
// const index = words.indexOf(word);
// if (index !== -1) {
//     alert(`The word "${word}" is at position ${index + 1} in the sentence.`);
// } else {
//     alert("The word was not found in the sentence.");
// }
//
// // Task: Reverse
// const originalArray = [];
// for (let i = 0; i < 5; i++) {
//     originalArray.push(prompt(`Enter element ${i + 1}:`));
// }
// const reversedArray = [];
// while (originalArray.length > 0) {
//     reversedArray.push(originalArray.pop());
// }
// console.log(reversedArray);
//
// // Task: Reverse 2
// const reversedReversedArray = [];
// while (reversedArray.length > 0) {
//     reversedReversedArray.unshift(reversedArray.shift());
// }
// console.log(reversedReversedArray);
//
// // Task: Copy
// const shallowCopy = [...multiplyTable];
// console.log(shallowCopy);
//
// // Task: Deep Copy
// const deepCopy = JSON.parse(JSON.stringify(multiplyTable));
// console.log(deepCopy);
//
// // Task: Array Equals
// const arr = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr === arr2);
//
// // Task: Flat
// const flatArray = multiplyTable.flat();
// console.log(flatArray);
//
// // Task: Destruct
// const inputString = prompt("Enter a string:");
// const [first, , fifth, , ninth] = inputString;
// console.log(first, fifth, ninth);
//
// // Task: Destruct default
// const inputString = prompt("Enter a string:");
// const [second = "!", , fourth = "!", fifth = "!"] = inputString;
// console.log(second, fourth, fifth);
//
// // Task: Multiply table rest
// const [first, second, third, fourth] = multiplyTableSlice.map(([_, ...rest]) => rest);
// const filteredTable = [first, second, third, fourth].filter(row => row.some(element => element !== 0));
// console.log(filteredTable);
//
// // Task: For Alert
// const names = ["John", "Paul", "George", "Ringo"];
// for (const name of names) {
//     alert(name);
// }
//
// // Task: For Select Option
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<select>";
// for (const currency of currencies) {
//     str += `<option>${currency}</option>`;
// }
// str += "</select>";
// document.write(str);
//
// // Task: For Table Horizontal
// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table><tr>";
// for (const name of names) {
//     str += `<td>${name}</td>`;
// }
// str += "</tr></table>";
// document.write(str);
//
// // Task: For Table Vertical
// const names = ["John", "Paul", "George", "Ringo"];
// let str = "<table>";
// for (const name of names) {
//     str += `<tr><td>${name}</td></tr>`;
// }
// str += "</table>";
// document.write(str);
//
// Task: For Table Letters
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// let str = "<table border='1'>";
// for (const currency of currencies) {
//     str += "<tr>";
//     for (const letter of currency) {
//         str += `<td>${letter}</td>`;
//     }
//     str += "</tr>";
// }
// str += "</table>";
// document.write(str);
//
// Task: For Multiply Table
// let str = "<table border='1'>";
// for (const row of multiplyTable) {
//     str += "<tr>";
//     for (const cell of row) {
//         str += `<td>${cell}</td>`;
//     }
//     str += "</tr>";
// }
// str += "</table>";
// document.write(str);
//
// // Task: Function Capitalize
// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// console.log(capitalize("cANBerRa"));
//
// // Task: Map Capitalize
// const inputString = prompt("Enter a string:");
// const capitalizedWords = inputString.split(" ").map(word => capitalize(word)).join(" ");
// console.log(capitalizedWords);
//
// // Task: Filter Lexics
// const inputString = prompt("Enter a string:");
// const words = inputString.split(" ");
// const lexics = ["bad", "evil", "hate"];
// const filteredWords = words.filter(word => !lexics.includes(word));
// console.log(filteredWords.join(" "));
//
// // Task: Beep Lexics
// const inputString = prompt("Enter a string:");
// const words = inputString.split(" ");
// const lexics = ["bad", "evil", "hate"];
// const modifiedWords = words.map(word => lexics.includes(word) ? "BEEP" : word);
// console.log(modifiedWords.join(" "));
//
// // Task: Reduce HTML
// const currencies = ["USD", "EUR", "GBP", "UAH"];
// const htmlString = currencies.reduce((html, currency) => html + `<option>${currency}</option>`, "<select>") + "</select>";
// document.write(htmlString);
//
// // Task: For Brackets Hell Check
// const line = prompt("Enter a string with parentheses:");
// const bracketsStack = [];
// let i = 0;
// for (const character of line) {
//     if (character === "(" || character === "[" || character === "{") {
//         bracketsStack.push(character);
//     } else if (character === ")" || character === "]" || character === "}") {
//         const lastBracket = bracketsStack.pop();
//         if (
//             (lastBracket === "(" && character !== ")") ||
//             (lastBracket === "[" && character !== "]") ||
//             (lastBracket === "{" && character !== "}")
//         ) {
//             alert(`Mismatched brackets at position ${i}`);
//             break;
//         }
//     }
//     i++;
// }
// if (bracketsStack.length === 0) {
//     alert("Brackets are balanced!");
// } else {
//     alert("Mismatched brackets at the end of the string.");
// }
