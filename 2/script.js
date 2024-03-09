// // Task: Number: odd
// let userInput = prompt("Введіть число:");
// let number = parseInt(userInput);
// if (!isNaN(number)) {
//     if (number % 2 === 0) {
//         alert("Число парне");
//     } else {
//         alert("Число непарне");
//     }
// } else {
//     alert("Некоректне число");
// }
//
// // Task: String: lexics
// let text = prompt("Введіть текст:");
// if (text.toLowerCase().indexOf("badword") !== -1) {
//     alert("Текст містить некоректні слова");
// } else {
//     alert("Текст допустимий");
// }
//
// // Task: Boolean
// let shopping = confirm("Вибрати шопінг?");
// let result = shopping ? "Так" : "ти - бяка";
// alert(result);
//
// // Task: Boolean: if this days
// let shopping = confirm("Вибрати шопінг?");
// if (shopping) {
//     alert("Так");
// } else {
//     alert("ти - бяка");
// }
//
// // Task: Default: or
// let firstName = prompt("Введіть ваше ім'я:") || "Іван";
// let lastName = prompt("Введіть ваше прізвище:") || "Іванов";
// let middleName = prompt("Введіть ваше по батькові:") || "Іванович";
// console.log(firstName, lastName, middleName);
//
// // Task: Default: if
// let firstName = prompt("Введіть ваше ім'я:");
// if (!firstName) {
//     firstName = "Іван";
// }
// let lastName = prompt("Введіть ваше прізвище:");
// if (!lastName) {
//     lastName = "Іванов";
// }
// let middleName = prompt("Введіть ваше по батькові:");
// if (!middleName) {
//     middleName = "Іванович";
// }
// console.log(firstName, lastName, middleName);
//
// // Task: Login and password
// let login = prompt("Введіть логін:");
// if (login === "admin") {
//     let password = prompt("Введіть пароль:");
//     if (password === "qwerty") {
//         alert("Ласкаво просимо, admin!");
//     } else {
//         alert("Невірний пароль");
//     }
// } else {
//     alert("Невірний логін");
// }
//
// // Task: Currency exchange
// let currency = prompt("Введіть валюту (USD, EUR):").toUpperCase();
// let isBuying = confirm("Бажаєте купити?");
// let rate;
// if (currency === "USD") {
//     rate = isBuying ? 27.5 : 27;
// } else if (currency === "EUR") {
//     rate = isBuying ? 32.5 : 32;
// } else {
//     alert("Непідтримувана валюта");
// }
// let amount = prompt("Введіть суму для обміну:");
// let result = isBuying ? amount / rate : amount * rate;
// alert(`Результат обміну: ${result.toFixed(2)}`);
//
// // Task: Scissors
// let userChoice = prompt("Введіть ваш вибір (камінь, ножиці, папір):").toLowerCase();
// let computerChoice = Math.random();
// if (computerChoice < 0.33) {
//     computerChoice = "камінь";
// } else if (computerChoice < 0.66) {
//     computerChoice = "ножиці";
// } else {
//     computerChoice = "папір";
// }
// alert(`Комп'ютер обрав: ${computerChoice}`);
// if (userChoice === computerChoice) {
//     alert("Нічия!");
// } else if (
//     (userChoice === "камінь" && computerChoice === "ножиці") ||
//     (userChoice === "ножиці" && computerChoice === "папір") ||
//     (userChoice === "папір" && computerChoice === "камінь")
// ) {
//     alert("Ви перемогли!");
// } else {
//     alert("Ви програли!");
// }
