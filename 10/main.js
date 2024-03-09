const render = () => {
    const kioskContainer = document.getElementById('kiosk-container');
    kioskContainer.innerHTML = '';
    for (const item in store.getState().kiosk) {
        const itemElement = document.createElement('div');
        const { quantity, pricePerUnit } = store.getState().kiosk[item];
        itemElement.innerHTML = `${item}: ${quantity} (Price per unit: $${pricePerUnit})`;
        kioskContainer.appendChild(itemElement);
    }
    document.getElementById('cash-register').textContent = `Cash Register: $${store.getState().cashRegister}`;
    document.getElementById('total-spent').textContent = `Total Spent: $${store.getState().totalSpent}`;
};

render();
store.subscribe(render);

document.getElementById('buy-button').addEventListener('click', () => {
    const selectedItem = document.getElementById('item-select').value;
    const quantity = parseInt(document.getElementById('quantity-input').value);
    const moneySpent = parseFloat(document.getElementById('money-input').value);
    store.dispatch(buyItem(selectedItem, quantity, moneySpent));
});