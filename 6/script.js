// // Blocks
// let a = 10;
// {
//     let b = 20;
//     {
//         let c = 30;
//         // Значення змінних: a = 10, b = 20, c = 30, d - невизначена
//
//         b++;
//         a *= 10;
//     }
//     {
//         let c = 50;
//         // Значення змінних: a = 100, b = 21, c = 50, d - невизначена
//         b += 500;
//     }
//     {
//         const a = 100500;
//         const d = "value";
//         // Значення змінних: a = 100500, b = 521, c - невизначена, d = "value"
//         {
//             let a = -50;
//             b = 1000;
//             // Значення змінних: a = -50, b = 1000, c - невизначена, d = "value"
//         }
//         // Значення змінних: a = 100500, b = 1000, c - невизначена, d = "value"
//     }
//     // Значення змінних: a = 100, b = 1000, c - невизначена, d - невизначена
// }
// // Значення змінних: a - невизначена, b - невизначена, c - невизначена, d - невизначена
//
// // Comparison If
// var age = +prompt("Скільки вам років?", "");
// if (age < 0) {
//     alert("Негативний вік? Серйозно?");
// } else if (age < 18) {
//     alert("школяр");
// } else if (age > 18 && age < 30) {
//     alert("молодь");
// } else if (age > 30 && age < 45) {
//     alert("зрілість");
// } else if (age > 45 && age < 60) {
//     alert("захід сонця");
// } else if (age > 60) {
//     alert("як пенсія?");
// } else {
//     alert("чи кіборг, чи KERNESS");
// }
//
// // Switch: Sizes
// // Оформлення через switch
//
// // Switch: If
// let color = prompt("Введіть колір", "");
// if (color === "red") {
//     document.write("<div style='background-color: red;'>червоний</div>");
// } else if (color === "black") {
//     document.write("<div style='background-color: black; color: white;'>чорний</div>");
// } else if (color === "blue") {
//     document.write("<div style='background-color: blue;'>синій</div>");
// } else if (color === "green") {
//     document.write("<div style='background-color: green;'>зелений</div>");
// } else {
//     document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }
//
// // NoSwitch
// const noSwitch = (key, cases, defaultKey = 'default') => {
//     if (cases[key]) {
//         cases[key]();
//     } else if (cases[defaultKey]) {
//         cases[defaultKey]();
//     }
// };
//
// const drink = prompt("Що ви любите пити");
// noSwitch(drink, {
//     воду: () => console.log('Найздоровіший вибір!'),
//     чай() {
//         console.log('Смачна та корисна штука. Не перестарайтеся з цукром');
//     },
//     "пиво": () => console.log('Добре влітку, та в міру'),
//     віскі: function () {
//         console.log('Та ви, батечку, естет! Не забудьте лід і сигару');
//     },
//     default() {
//         console.log('шото я не зрозумів');
//     }
// });
//
// // Closure Calc
// fetch('https://open.er-api.com/v6/latest/USD')
//     .then(res => res.json())
//     .then(data => {
//         for (const currency in data.rates) {
//             const button = document.createElement('button');
//             button.innerText = currency;
//             button.onclick = () => {
//                 const amount = prompt(`Enter amount in ${currency}`);
//                 const convertedAmount = amount * data.rates[currency];
//                 console.log(`${amount} ${currency} equals ${convertedAmount} USD`);
//             };
//             document.body.appendChild(button);
//         }
//     });
//
// // Closure Calc 2
// fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
//     .then(res => res.json())
//     .then(data => {
//         const countriesSelect = document.getElementById('countries');
//         const citiesSelect = document.getElementById('cities');
//
//         for (const country in data) {
//             const option = document.createElement('option');
//             option.innerText = country;
//             countriesSelect.appendChild(option);
//         }
//
//         countriesSelect.onchange = () => {
//             const selectedCountry = countriesSelect.value;
//             citiesSelect.innerHTML = '';
//             for (const city of data[selectedCountry]) {
//                 const option = document.createElement('option');
//                 option.innerText = city;
//                 citiesSelect.appendChild(option);
//             }
//         };
//     });
