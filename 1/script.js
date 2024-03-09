// // String: greeting
// let name = prompt("Як вас звати?");
// alert(`Привіт, ${name}!`);

// // String: gopni4ek
// let userInput = prompt("Введіть рядок:");
// let modifiedString = userInput.split(',').join(', блін, ');
// console.log(modifiedString);
//
// // String: capitalize
// let str = "cANBerRa";
// let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// console.log(result);
//
// // String: word count
// let sentence = prompt("Введіть рядок:");
// let wordCount = sentence.trim().split(" ").length;
// console.log(wordCount);
//
// // String: credentials
// let firstName = prompt("Введіть ваше ім'я:");
// let lastName = prompt("Введіть ваше прізвище:");
// let middleName = prompt("Введіть ваше по батькові:");
// let fullName = `${firstName.trim().charAt(0).toUpperCase() + firstName.trim().slice(1).toLowerCase()} ${lastName.trim().charAt(0).toUpperCase() + lastName.trim().slice(1).toLowerCase()} ${middleName.trim().charAt(0).toUpperCase() + middleName.trim().slice(1).toLowerCase()}`;
// console.log(fullName);
//
// // String: beer
// let str = "Було жарко. Василь пив пиво вприкуску з креветками";
// let result = str.split("пиво").join("чай");
// console.log(result);
//
// // String: no tag
// let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
// let startIndex = str.indexOf("<");
// let endIndex = str.indexOf(">");
// let result = str.slice(0, startIndex) + str.slice(endIndex + 1);
// console.log(result);
//
// // String: big tag
// let str = "якийсь текст у якому є один тег <br /> і всяке інше";
// let startIndex = str.indexOf("<");
// let endIndex = str.indexOf(">");
// let result = str.slice(0, startIndex) + str.slice(startIndex, endIndex + 1).toUpperCase() + str.slice(endIndex + 1);
// console.log(result);
//
// // String: new line
// let userInput = prompt("Введіть рядок з маркерами нового рядка (\\n):");
// let multiLineString = userInput.split("\\n").join("\n");
// console.log(multiLineString);
//
// // String: youtube
// const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
// let userText = prompt("Введіть текст з посиланням на YouTube:");
// let videoId = userText.match(youtubeRegex)[1];
// let embedHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
// document.write(embedHTML);
