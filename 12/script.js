function htmlTree(node) {
    let html = `<${node.tagName}`;
    if (node.attrs) {
        for (const [key, value] of Object.entries(node.attrs)) {
            html += ` ${key}="${value}"`;
        }
    }
    html += ">";

    if (node.children) {
        node.children.forEach(child => {
            if (typeof child === 'string') {
                html += child;
            } else {
                html += htmlTree(child);
            }
        });
    }

    html += `</${node.tagName}>`;

    return html;
}

function domTree(parent, node) {
    const element = document.createElement(node.tagName);

    if (node.attrs) {
        for (const [key, value] of Object.entries(node.attrs)) {
            element.setAttribute(key, value);
        }
    }

    if (node.children) {
        node.children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                domTree(element, child);
            }
        });
    }

    parent.appendChild(element);
}

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let copy;
    if (Array.isArray(obj)) {
        copy = [];
        obj.forEach((item, index) => {
            copy[index] = deepCopy(item);
        });
    } else {
        copy = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                copy[key] = deepCopy(obj[key]);
            }
        }
    }

    return copy;
}

function stringify(obj) {
    if (typeof obj === 'function' || typeof obj === 'undefined') {
        return undefined;
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'string') {
        return `"${obj}"`;
    }
    if (typeof obj !== 'object') {
        return String(obj);
    }

    const isArray = Array.isArray(obj);

    const items = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            const strValue = stringify(value);
            if (typeof strValue !== 'undefined') {
                if (isArray) {
                    items.push(strValue);
                } else {
                    items.push(`"${key}":${strValue}`);
                }
            }
        }
    }

    if (isArray) {
        return `[${items.join(',')}]`;
    } else {
        return `{${items.join(',')}}`;
    }
}

function getElementById(idToFind, parent = document.body) {
    for (const child of parent.children) {
        if (child.id === idToFind) {
            throw child;
        }
        const foundElement = getElementById(idToFind, child);
        if (foundElement) {
            return foundElement;
        }
    }
    return null;
}

function testHtmlTree() {
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    };

    const html = htmlTree(table);
    document.getElementById('htmlTreeResult').innerHTML = html;
}

function testDomTree() {
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    };

    domTree(document.getElementById('domTreeResult'), table);
}

function testDeepCopy() {
    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
    const arr2 = deepCopy(arr);
    console.log(arr2);
    document.getElementById('deepCopyResult').innerHTML = JSON.stringify(arr2);
}

function testStringify() {
    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
    const jsonString = stringify(arr);
    console.log(jsonString);
    document.getElementById('stringifyResult').innerHTML = jsonString;
}

function testGetElementById() {
    try {
        getElementById('elementIdToFind');
    } catch (error) {
        document.getElementById('getElementByIdResult').innerText = 'Element found!';
        return;
    }
    document.getElementById('getElementByIdResult').innerText = 'Element not found!';
}
