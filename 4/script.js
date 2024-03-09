// // Literals
// const cat = {
//     name: "Fluffy",
//     age: 3,
//     color: "black"
// };
//
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2022
// };
//
// // Literals expand
// const dog = {
//     breed: prompt("Enter the breed of the dog:"),
//     size: prompt("Enter the size of the dog:"),
//     color: prompt("Enter the color of the dog:")
// };
//
// // Literals copy
// const bird = {
//     type: "Parrot",
//     color: "Green",
//     age: 2
// };
// const newProperty = prompt("Enter a new property for the bird:");
// const copiedBird = { ...bird, [newProperty]: prompt(`Enter a value for the new property ${newProperty}:`) };
//
// // Html tree
// const htmlTree = {
//     tagName: 'body',
//     children: [
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName: 'span',
//                     children: ['Enter a data please:']
//                 },
//                 {
//                     tagName: 'br'
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'name'
//                     }
//                 },
//                 {
//                     tagName: 'input',
//                     attrs: {
//                         type: 'text',
//                         id: 'surname'
//                     }
//                 }
//             ]
//         },
//         {
//             tagName: 'div',
//             children: [
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'ok'
//                     },
//                     children: ['OK']
//                 },
//                 {
//                     tagName: 'button',
//                     attrs: {
//                         id: 'cancel'
//                     },
//                     children: ['Cancel']
//                 }
//             ]
//         }
//     ]
// };
//
// // Destructure
// const { children: [{ children: [span] }] } = htmlTree;
// const { children: [{ children: [, cancel] }] } = htmlTree;
// const { children: [{ children: [,, input] }] } = htmlTree;
//
// // Destruct array
// let arr = [1,2,3,4,5, "a", "b", "c"];
// const [even1, odd1, even2, odd2, odd3, ...letters] = arr;
//
// // Destruct string
// let arr = [1, "abc"];
// const [number, s1, s2, s3] = arr[1];
//
// // Destruct 2
// let obj = {name: 'Ivan', surname: 'Petrov', children: [{name: 'Maria'}, {name: 'Nikolay'}]};
// const { children: [{ name: name1 }, { name: name2 }] } = obj;
//
// // Destruct 3
// let arr = [1,2,3,4, 5,6,7,10];
// const [{ a, b }, , { length }] = arr;
//
// // Copy delete
// const { breed, ...copiedDog } = dog;
//
// // Currency real rate
// fetch('https://open.er-api.com/v6/latest/USD')
//     .then(res => res.json())
//     .then(data => {
//         const fromCurrency = prompt("Enter the input currency:");
//         const toCurrency = prompt("Enter the output currency:");
//         const amount = parseFloat(prompt("Enter the amount:"));
//         const rate = data.rates[toCurrency] / data.rates[fromCurrency];
//         alert(`Converted amount: ${amount * rate}`);
//     });
//
// // Currency drop down
// fetch('https://open.er-api.com/v6/latest/USD')
//     .then(res => res.json())
//     .then(data => {
//         const currencies = Object.keys(data.rates);
//         let selectHtml = "<select>";
//         for (const currency of currencies) {
//             selectHtml += `<option>${currency}</option>`;
//         }
//         selectHtml += "</select>";
//         document.write(selectHtml);
//     });
//
// // Currency table
// fetch('https://open.er-api.com/v6/latest/USD')
//     .then(res => res.json())
//     .then(data => {
//         const currencies = Object.keys(data.rates);
//         const table = [];
//         for (const fromCurrency of currencies) {
//             const row = [];
//             for (const toCurrency of currencies) {
//                 row.push((data.rates[toCurrency] / data.rates[fromCurrency]).toFixed(2));
//             }
//             table.push(row);
//         }
//         let tableHtml = "<table>";
//         for (const row of table) {
//             tableHtml += "<tr>";
//             for (const cell of row) {
//                 tableHtml += `<td>${cell}</td>`;
//             }
//             tableHtml += "</tr>";
//         }
//         tableHtml += "</table>";
//         document.write(tableHtml);
//     });
//
// // Form
// const car = {
//     "Name":"chevrolet chevelle malibu",
//     "Cylinders":8,
//     "Displacement":307,
//     "Horsepower":130,
//     "Weight_in_lbs":3504,
//     "Origin":"USA",
//     "in_production": false
// };
//
// let formHtml = "<form>";
// for (const key in car) {
//     formHtml += `<label>${key}: <input type="${typeof car[key] === 'boolean' ? 'checkbox' : 'text'}" value="${car[key]}"${typeof car[key] === 'boolean' && car[key] ? ' checked' : ''}/></label>`;
// }
// formHtml += "</form>";
// document.write(formHtml);
//
// // Table
// const persons = [
//     {
//         name: 'Марія',
//         fatherName: 'Іванівна',
//         surname: 'Іванова',
//         sex: 'female'
//     },
//     {
//         name: 'Миколай',
//         fatherName: 'Іванович',
//         surname: 'Іванов',
//         age: 15
//     },
//     {
//         name: 'Петро',
//         fatherName: 'Іванович',
//         surname: 'Іванов',
//         married: true
//     },
// ];
//
// const columns = Array.from(persons.reduce((acc, person) => {
//     Object.keys(person).forEach(key => acc.add(key));
//     return acc;
// }, new Set()));
//
// let tableHtml = "<table><tr>";
// for (const column of columns) {
//     tableHtml += `<th>${column}</th>`;
// }
// tableHtml += "</tr>";
// for (const person of persons) {
//     tableHtml += "<tr>";
//     for (const column of columns) {
//         tableHtml += `<td>${person[column] || ''}</td>`;
//     }
//     tableHtml += "</tr>";
// }
// tableHtml += "</table>";
// document.write(tableHtml);
