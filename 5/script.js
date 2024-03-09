// Temperature
function convertTemperature(temperature, fromUnit, toUnit) {
    if (fromUnit === 'C' && toUnit === 'F') {
        return (temperature * 9/5) + 32;
    } else if (fromUnit === 'F' && toUnit === 'C') {
        return (temperature - 32) * 5/9;
    } else {
        return "Conversion not supported";
    }
}


console.log(convertTemperature(20, 'C', 'F'));
console.log(convertTemperature(68, 'F', 'C'));

// RGB
function convertRGB(r, g, b) {
    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hexR = toHex(r);
    const hexG = toHex(g);
    const hexB = toHex(b);

    return `#${hexR}${hexG}${hexB}`;
}


console.log(convertRGB(255, 0, 0));
console.log(convertRGB(0, 128, 255));

// Flats
function getFlatLocation(flatNumber, flatsPerFloor, floors) {
    const totalFlats = flatsPerFloor * floors;
    const entrance = Math.ceil(flatNumber / totalFlats);
    const relativeFlatNumber = (flatNumber - 1) % totalFlats;
    const floor = Math.ceil(relativeFlatNumber / flatsPerFloor) || flatsPerFloor;
    return { entrance, floor };
}


console.log(getFlatLocation(12, 6, 5));
console.log(getFlatLocation(35, 8, 6));


// Credentials
function getCredentials() {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const name = prompt("Enter your name");
    const surname = prompt("Enter your surname");
    const fatherName = prompt("Enter your father's name");

    const fullName = `${capitalize(surname)} ${capitalize(name)} ${capitalize(fatherName)}`;

    return { name, surname, fatherName, fullName };
}


console.log(getCredentials());


function addNewLine(str) {
    return str.replace(/\n/g, "<br/>");
}

const textWithNewLine = "Hello,\nWorld!";
console.log(addNewLine(textWithNewLine));



// Prompt OR
function promptOr(defaultValue, message) {
    return prompt(message) || defaultValue;
}


const userInput = promptOr("defaultValue", "Enter something:");
console.log(userInput);

// Login And Password
function login(username, password) {
    const correctUsername = "admin";
    const correctPassword = "password123";
    return username === correctUsername && password === correctPassword;
}


const username = prompt("Enter username:");
const password = prompt("Enter password:");
console.log(login(username, password));

// For Multiply Table
function createMultiplyTable(rows, columns) {
    let tableHTML = "<table border='1'>";
    for (let i = 1; i <= rows; i++) {
        tableHTML += "<tr>";
        for (let j = 1; j <= columns; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    return tableHTML;
}


console.log(createMultiplyTable(3, 3));

// Filter Lexics
function filterLexics(text, forbiddenWords) {
    const regex = new RegExp(forbiddenWords.join("|"), "gi");
    return text.replace(regex, "");
}


const forbiddenWords = ['бляха', 'муха', 'пляшка', 'шабля'];
const text = "Це тестовий текст із словами бляха, муха, пляшка та шабля.";
console.log(filterLexics(text, forbiddenWords));


// Currency Table
function createCurrencyTable() {

    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {

            const rates = data.rates;
            const currencies = Object.keys(rates);
            const table = [[""].concat(currencies)];

            currencies.forEach(currency => {
                const row = [currency];
                currencies.forEach(otherCurrency => {
                    const rate = otherCurrency === currency ? 1 : rates[otherCurrency] / rates[currency];
                    row.push(rate.toFixed(2));
                });
                table.push(row);
            });

            const tableHTML = createMultiplyTable(table.length, table[0].length);
            document.body.innerHTML += tableHTML;
        })
        .catch(error => console.error('Error fetching currency rates:', error));
}


createCurrencyTable();

function calcResult() {
    divisionResult.innerHTML = "Текст у <code>div</code> змінено за допомогою <strong>Javascript</strong><br/>" + Math.random();
}

const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const divisionResult = document.getElementById("divisionResult");

firstNumber.oninput = secondNumber.oninput = calcResult;
