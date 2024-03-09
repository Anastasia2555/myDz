// Person Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fatherName = '';

    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
}

const a1 = new Person("Вася", "Пупкін");
const b1 = new Person("Ганна", "Іванова");
const c1 = new Person("Єлизавета", "Петрова");

console.log(a1.getFullName());
a1.fatherName = 'Іванович';
console.log(a1.getFullName());
console.log(b1.getFullName());

// Person Prototype
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

const a2 = new Person("Вася", "Пупкін");
const b2 = new Person("Ганна", "Іванова");
const c2 = new Person("Єлизавета", "Петрова");

console.log(a2.getFullName());
a2.fatherName = 'Іванович';
console.log(a2.getFullName());
console.log(b2.getFullName());

// Store
function Store(reducer, initialState) {
    let state = initialState;
    let cbs = [];

    this.subscribe = function (cb) {
        cbs.push(cb);
        return () => {
            cbs = cbs.filter(c => c !== cb);
        };
    };

    this.dispatch = function (action) {
        state = reducer(state, action);
        cbs.forEach(cb => cb());
    };

    this.getState = function () {
        return state;
    };
}

// Password
function Password(parent, open) {
    const input = document.createElement('input');
    input.type = 'password';
    parent.appendChild(input);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Password Visibility';
    parent.appendChild(toggleButton);

    let isOpen = open;

    toggleButton.addEventListener('click', () => {
        isOpen = !isOpen;
        input.type = isOpen ? 'text' : 'password';
        if (this.onOpenChange) {
            this.onOpenChange(isOpen);
        }
    });

    this.setValue = function (value) {
        input.value = value;
        if (this.onChange) {
            this.onChange(value);
        }
    };

    this.getValue = function () {
        return input.value;
    };

    this.setOpen = function (value) {
        isOpen = value;
        input.type = isOpen ? 'text' : 'password';
        if (this.onOpenChange) {
            this.onOpenChange(isOpen);
        }
    };

    this.getOpen = function () {
        return isOpen;
    };
}

// Password Verify
function PasswordVerify(parent) {
    const password1 = new Password(parent, true);
    const password2 = new Password(parent, true);

    password1.onChange = value => {
        if (value !== password2.getValue()) {
            password1.setStyle({ borderColor: 'red' });
            password2.setStyle({ borderColor: 'red' });
        } else {
            password1.setStyle({ borderColor: '' });
            password2.setStyle({ borderColor: '' });
        }
    };

    password2.onChange = value => {
        if (value !== password1.getValue()) {
            password1.setStyle({ borderColor: 'red' });
            password2.setStyle({ borderColor: 'red' });
        } else {
            password1.setStyle({ borderColor: '' });
            password2.setStyle({ borderColor: '' });
        }
    };
}

// LoginForm Constructor
function LoginForm(parent) {
    const loginButton = document.createElement('button');
    loginButton.textContent = 'Login';
    parent.appendChild(loginButton);

    const password = new Password(parent, false);
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    parent.appendChild(usernameInput);

    loginButton.disabled = true;

    usernameInput.addEventListener('input', () => {
        loginButton.disabled = !usernameInput.value || !password.getValue();
    });

    password.onChange = value => {
        loginButton.disabled = !usernameInput.value || !value;
    };
}

// Usage
const personContainer = document.getElementById('person-info');
const personInfo = new Person("John", "Doe");
personContainer.innerHTML = `<h2>Person Info</h2><p>Name: ${personInfo.getFullName()}</p>`;

const storeContainer = document.getElementById('store-info');
const storeInfo = new Store((state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}, 0);
storeContainer.innerHTML = `<h2>Store Info</h2><p>Initial State: ${storeInfo.getState()}</p>`;

const passwordContainer = document.getElementById('password-info');
const passwordInfo = new Password(passwordContainer, true);
passwordInfo.onChange = data => console.log(data);
passwordInfo.onOpenChange = open => console.log(open);

passwordInfo.setValue('qwerty');
console.log(passwordInfo.getValue());

passwordInfo.setOpen(false);
console.log(passwordInfo.getOpen());

const loginFormContainer = document.getElementById('login-form-container');
const loginForm = new LoginForm(loginFormContainer);

const passwordVerifyContainer = document.getElementById('password-verify-container');
const passwordVerify = new PasswordVerify(passwordVerifyContainer);
