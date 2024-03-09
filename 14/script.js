async function jsonPost(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

async function sendMessage() {
    const nickInput = document.getElementById('nickInput');
    const messageInput = document.getElementById('messageInput');
    const nick = nickInput.value.trim();
    const message = messageInput.value.trim();

    if (!nick || !message) {
        alert('Please enter your nickname and message.');
        return;
    }

    try {
        const response = await jsonPost("http://students.a-level.com.ua:10012", { func: 'addMessage', nick, message });
        console.log(response);
    } catch (error) {
        console.error('Error sending message:', error);
    } finally {

        nickInput.value = '';
        messageInput.value = '';
    }
}

async function getMessages(messageId) {
    try {
        const response = await jsonPost("http://students.a-level.com.ua:10012", { func: 'getMessages', messageId });
        return response.data;
    } catch (error) {
        console.error('Error getting messages:', error);
        return [];
    }
}

async function displayMessages() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.innerHTML = ''; // Clear previous messages

    const messages = await getMessages(0);
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>${message.nick}</strong>: ${message.message} <span>${new Date(message.timestamp)}</span>`;
        chatContainer.appendChild(messageDiv);
    });
}

async function checkLoop() {
    while (true) {
        await displayMessages();
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}


checkLoop();


async function fetchUrl(url) {
    const response = await fetch(url);
    return response.json();
}

async function resolveNestedLinks(obj) {
    const promises = [];
    for (const key in obj) {
        if (typeof obj[key] === 'string' && obj[key].startsWith('https://swapi.dev/api/')) {
            promises.push(
                fetchUrl(obj[key])
                    .then(data => resolveNestedLinks(data))
                    .then(data => {
                        obj[key] = data;
                    })
            );
        } else if (Array.isArray(obj[key])) {
            for (let i = 0; i < obj[key].length; i++) {
                if (typeof obj[key][i] === 'string' && obj[key][i].startsWith('https://swapi.dev/api/')) {
                    promises.push(
                        fetchUrl(obj[key][i])
                            .then(data => resolveNestedLinks(data))
                            .then(data => {
                                obj[key][i] = data;
                            })
                    );
                }
            }
        }
    }
    await Promise.all(promises);
    return obj;
}

function swapiLinks(url) {
    return fetchUrl(url)
        .then(data => resolveNestedLinks(data));
}

swapiLinks("https://swapi.dev/api/people/20/")
    .then(yodaWithLinks => console.log(JSON.stringify(yodaWithLinks, null, 4)));


function domEventPromise(element, eventName) {
    return new Promise(resolve => {
        const handler = event => {
            element.removeEventListener(eventName, handler);
            resolve(event);
        };
        element.addEventListener(eventName, handler);
    });
}


const knopka = document.getElementById('knopka');
domEventPromise(knopka, 'click')
    .then(event => console.log('event click happens', event));
