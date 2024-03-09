
function fetchLuke() {
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => console.log(luke))
        .catch(error => console.error('Error fetching Luke Skywalker:', error));
}


function displayJSONAsTable(container, json) {
    let tableHTML = '<tr><th>Key</th><th>Value</th></tr>';
    for (const key in json) {
        if (typeof json[key] === 'object') {
            tableHTML += `<tr><td>${key}</td><td><button onclick="fetchAndDisplay(this, '${json[key]}')">Fetch</button></td></tr>`;
        } else {
            tableHTML += `<tr><td>${key}</td><td>${json[key]}</td></tr>`;
        }
    }
    container.innerHTML = tableHTML;
}


function fetchLukeAndDisplay() {
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            const tableContainer = document.getElementById('table-container');
            displayJSONAsTable(tableContainer, luke);
        })
        .catch(error => console.error('Error fetching and displaying Luke Skywalker:', error));
}


function fetchLukeAndDisplayRecursive() {
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            const tableContainer = document.getElementById('table-container');
            recursiveDisplayJSON(tableContainer, luke);
        })
        .catch(error => console.error('Error fetching and displaying Luke Skywalker (Recursive):', error));
}


function recursiveDisplayJSON(container, json) {
    let tableHTML = '<tr><th>Key</th><th>Value</th></tr>';
    for (const key in json) {
        if (typeof json[key] === 'object') {
            tableHTML += `<tr><td>${key}</td><td><button onclick="fetchAndDisplay(this, '${json[key]}')">Fetch</button></td></tr>`;
        } else {
            tableHTML += `<tr><td>${key}</td><td>${json[key]}</td></tr>`;
        }
    }
    container.innerHTML = tableHTML;
}


function fetchAndDisplay(element, url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const parent = element.parentElement.parentElement;
            recursiveDisplayJSON(parent, data);
        })
        .catch(error => console.error('Error fetching and displaying data:', error));
}


function confirmPromise(text) {
    return new Promise((resolve, reject) => {
        const result = confirm(text);
        if (result) {
            resolve();
        } else {
            reject();
        }
    });
}


function promptPromise(text) {
    return new Promise((resolve, reject) => {
        const result = prompt(text);
        if (result === null) {
            reject();
        } else {
            resolve(result);
        }
    });
}


function loginPromise(parent) {
    return new Promise((resolve, reject) => {
        const form = new LoginForm(parent);
        form.onSubmit = () => {
            const login = form.elements.login.value;
            const password = form.elements.password.value;
            resolve({ login, password });
        };
        form.onCancel = () => {
            reject();
        };
    });
}
