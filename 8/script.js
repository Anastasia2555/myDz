// Arrow to Functions
// Task 1: Arrow to Functions
function sum(a, b) {
    return a + b;
}

// Task 2: Arrow to Functions
function isPositive(number) {
    return number >= 0;
}

// Task 3: Arrow to Functions
function randomNumber() {
    return Math.random;
}

// Task 4: Arrow to Functions
document.addEventListener('click', function() {
    console.log('Click');
});

// Task 5: Arrow to Functions
document.addEventListener('click', () => {
    console.log('Click');
});

// createPerson
function createPerson(name, surname) {
    return {
        name: name,
        surname: surname,
        getFullName: function() {
            return this.name + " " + this.surname;
        }
    };
}

const a = createPerson("Вася", "Пупкін");
const b = createPerson("Ганна", "Іванова");
const c = createPerson("Єлизавета", "Петрова");

console.log(a.getFullName());
a.fatherName = 'Іванович';
console.log(a.getFullName());

console.log(b.getFullName());

// createPersonClosure
function createPersonClosure(name, surname) {
    let fullName = name + " " + surname;

    return {
        getName: function() {
            return name;
        },
        getSurname: function() {
            return surname;
        },
        getFatherName: function() {
            return fullName.split(' ')[2] || '';
        },
        getAge: function() {
            return age;
        },
        getFullName: function() {
            return fullName;
        },
        setName: function(newName) {
            if (typeof newName === 'string' && /^[A-Z]/.test(newName)) {
                name = newName;
                fullName = name + " " + surname;
            }
            return name;
        },
        setSurname: function(newSurname) {
            if (typeof newSurname === 'string' && /^[A-Z]/.test(newSurname)) {
                surname = newSurname;
                fullName = name + " " + surname;
            }
            return surname;
        },
        setFatherName: function(newFatherName) {
            if (typeof newFatherName === 'string' && /^[A-Z]/.test(newFatherName)) {
                fullName = name + " " + surname + " " + newFatherName;
            }
            return newFatherName;
        },
        setAge: function(newAge) {
            if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
                age = newAge;
            }
            return age;
        },
        setFullName: function(newFullName) {
            const parts = newFullName.split(' ');
            if (parts.length === 3 && /^[A-Z]/.test(parts[0]) && /^[A-Z]/.test(parts[1]) && /^[A-Z]/.test(parts[2])) {
                name = parts[0];
                surname = parts[1];
                fullName = newFullName;
            }
            return fullName;
        }
    };
}

const x = createPersonClosure("Іван", "Петров");
console.log(x.getName());
x.setAge(25);
console.log(x.getAge());
x.setAge(150); //не працює

// personForm
function personForm(parent, person) {
    const inputs = {};

    for (const key in person) {
        if (key.startsWith('get')) {
            const prop = key.slice(3);
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', prop);
            input.value = person[key]();
            input.addEventListener('input', () => {
                person[`set${prop}`](input.value);
                input.value = person[key]();
            });
            parent.appendChild(input);
            inputs[prop] = input;
        }
    }

    return inputs;
}

const y = createPersonClosure("Марія", "Іванова");
personForm(document.body, y);

// getSetForm
function getSetForm(parent, obj) {
    const inputs = {};
    const registry = {};

    function updateInputs() {
        for (const key in registry) {
            const method = key.startsWith('get') ? 'get' : 'set';
            const prop = key.slice(3);
            const input = registry[key];
            if (method === 'get') {
                input.value = obj[key]();
            } else {
                input.addEventListener('input', () => {
                    obj[key](input.value);
                    input.value = obj[`get${prop}`]();
                });
            }
        }
    }

    for (const key in obj) {
        if (key.startsWith('get') || key.startsWith('set')) {
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            const prop = key.slice(3);
            input.setAttribute('placeholder', prop);
            parent.appendChild(input);
            registry[key] = input;
        }
    }

    updateInputs();

    return inputs;
}

const z = createPersonClosure("Олександр", "Сидоров");
getSetForm(document.body, z);