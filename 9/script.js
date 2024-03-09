// makeProfileTimer
function makeProfileTimer() {
    const start = performance.now();
    return function() {
        return performance.now() - start;
    };
}

// makeSaver
function makeSaver(func) {
    let savedValue;
    let saved = false;
    return function() {
        if (!saved) {
            savedValue = func();
            saved = true;
        }
        return savedValue;
    };
}

// myBind
function myBind(func, context, placeholders) {
    return function(...args) {
        const params = placeholders.map((placeholder, index) => {
            return placeholder !== undefined ? placeholder : args[index];
        });
        return func.apply(context, params);
    };
}

// checkResult
function checkResult(original, validator) {
    return function(...args) {
        let result = original(...args);
        while (!validator(result)) {
            result = original(...args);
        }
        return result;
    };
}

// RandomHigh
const RandomHigh = makeSaver(Math.random);

// AlwaysSayYes
const AlwaysSayYes = checkResult(confirm, result => result === true);

// respectMe
function respectMe() {
    let userInput;
    do {
        userInput = prompt("Enter something:");
    } while (!userInput);
    return userInput;
}

// Test
const timer = makeProfileTimer();
alert('Measuring the execution time of this alert');
alert(timer());

const saver = makeSaver(Math.random);
const value1 = saver();
const value2 = saver();
alert(`Random: ${value1} === ${value2}`);

const pow5 = myBind(Math.pow, Math, [, 5]);
alert(pow5(2));

AlwaysSayYes();
