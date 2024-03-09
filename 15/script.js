const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

async function trafficLight(greenTime, yellowTime, redTime, greenElem, yellowElem, redElem) {
    while (true) {
        greenElem.style.backgroundColor = 'green';
        await delay(greenTime);
        greenElem.style.backgroundColor = '';

        yellowElem.style.backgroundColor = 'yellow';
        await delay(yellowTime);
        yellowElem.style.backgroundColor = '';

        redElem.style.backgroundColor = 'red';
        await delay(redTime);
        redElem.style.backgroundColor = '';
    }
}

async function PedestrianTrafficLight(walkTime, redTime, walkElem) {
    while (true) {
        walkElem.style.backgroundColor = 'green';
        await delay(walkTime);
        walkElem.style.backgroundColor = '';

        await delay(redTime);

        walkElem.style.backgroundColor = 'red';
        await delay(redTime / 2);
        walkElem.style.backgroundColor = '';
    }
}

function domEventPromise(element, eventName) {
    return new Promise(resolve => {
        const handler = event => {
            element.removeEventListener(eventName, handler);
            resolve(event);
        };
        element.addEventListener(eventName, handler);
    });
}

async function PedestrianTrafficLightWithDelay(delayTime, walkTime, redTime, walkElem, button) {
    let canWalk = false;

    async function pedestrianLight() {
        while (true) {
            walkElem.style.backgroundColor = 'green';
            await delay(walkTime);
            walkElem.style.backgroundColor = '';

            await delay(redTime);

            walkElem.style.backgroundColor = 'red';
            await delay(redTime / 2);
            walkElem.style.backgroundColor = '';
        }
    }

    async function pedestrianButton() {
        await domEventPromise(button, 'click');
        canWalk = true;
        setTimeout(() => canWalk = false, delayTime);
    }

    await Promise.race([pedestrianLight(), pedestrianButton()]);
}

const greenLight = document.getElementById('green');
const yellowLight = document.getElementById('yellow');
const redLight = document.getElementById('red');
const walkLight = document.getElementById('walk');
const pedestrianButton = document.getElementById('pedestrianButton');

trafficLight(3000, 1000, 2000, greenLight, yellowLight, redLight);
PedestrianTrafficLight(5000, 2000, walkLight);
PedestrianTrafficLightWithDelay(5000, 5000, 2000, walkLight, pedestrianButton);

async function speedtest(getPromise, count, parallel = 1) {
    const start = performance.now();

    const promises = [];
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < parallel; j++) {
            promises.push(getPromise());
        }
        await Promise.all(promises);
    }

    const end = performance.now();

    const duration = end - start;
    const queryDuration = duration / (count * parallel);
    const querySpeed = 1 / queryDuration;
    const parallelDuration = duration / (count);
    const parallelSpeed = parallel * count / duration;

    return {
        duration,
        querySpeed,
        queryDuration,
        parallelSpeed,
        parallelDuration
    };
}

async function gql(endpoint, query, variables) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        }),
    });
    return await response.json();
}

function jwtDecode(token) {
    try {
        const parts = token.split('.');
        const decodedPart = atob(parts[1]);
        return JSON.parse(decodedPart);
    } catch (error) {
        return undefined;
    }
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";
const decodedToken = jwtDecode(token);
const jwtDecodeResultsDiv = document.getElementById('jwtDecodeResults');
if (typeof decodedToken !== 'undefined') {
    jwtDecodeResultsDiv.innerHTML = `<pre>${JSON.stringify(decodedToken, null, 2)}</pre>`;
} else {
    jwtDecodeResultsDiv.innerHTML = "Token decoding failed or token is undefined.";
}

try {
    console.log(jwtDecode());
    console.log(jwtDecode("дічь"));
    console.log(jwtDecode("ey.ey.ey"));
    console.log('No errors occurred, jwtDecode did not throw console errors');
} finally {
    console.log('Assignment completed.');
}

speedtest(() => delay(1000), 10, 10).then(result => {
    const speedTestResultsDiv = document.getElementById('speedTestResults');
    speedTestResultsDiv.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
});

(async () => {
    const catQuery = `query cats($q: String){
        CategoryFind(query: $q){
            _id name
        }
    }`;
    const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", catQuery, { q: "[{}]" });
    const graphqlResultsDiv = document.getElementById('graphqlResults');
    graphqlResultsDiv.innerHTML = `<pre>${JSON.stringify(cats, null, 2)}</pre>`;
})();
